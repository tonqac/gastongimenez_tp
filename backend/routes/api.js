const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary');

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

module.exports = router;
