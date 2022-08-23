const express = require('express');
const router = express.Router();

const cloudinary = require('cloudinary').v2;
const nodemailer = require('nodemailer');

const trabajosModel = require('../models/trabajosModel');

router.get('/trabajos', async (req,res,next)=>{
    let objs = await trabajosModel.listar();
    objs = objs.map(obj=>{
        let imagen_principal = imagen_trabajo = '/images/no-image.png';
        if(obj.imagen_principal) imagen_principal = cloudinary.url(obj.imagen_principal)
        if(obj.imagen_trabajo) imagen_trabajo = cloudinary.url(obj.imagen_trabajo)

        return {
            ...obj,
            imagen_principal,
            imagen_trabajo
        }
    });

    res.json(objs);
});

router.get('/trabajos/:id', async (req,res,next)=>{
    let obj = await trabajosModel.buscarPorId(req.params.id);
    let imagen_principal = imagen_trabajo = '/images/no-image.png';
    if(obj.imagen_principal) imagen_principal = cloudinary.url(obj.imagen_principal)
    if(obj.imagen_trabajo) imagen_trabajo = cloudinary.url(obj.imagen_trabajo)

    res.json({
        ...obj,
        imagen_principal,
        imagen_trabajo
    });
});

router.post('/contacto', async(req,res,next)=>{
    const mail = {
        to: 'gimenezga@gmail.com',
        subject: 'Contacto desde la Web',
        html: ` Nombre: ${req.body.nombre} <br>
                Email: ${req.body.email} <br>
                Teléfono: ${req.body.telefono} <br>
                Mensaje: ${req.body.mensaje} <br>`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth:{
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        }
    });

    await transport.sendMail(mail);

    res.status(201).json({
        success: true,
        message: '¡Gracias por enviar tus comentarios! En breve te estaré contactando :)'
    });

});

module.exports = router;
