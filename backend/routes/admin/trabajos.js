const express = require('express');
const router = express.Router();
const util = require('util');

const cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroyer = util.promisify(cloudinary.uploader.destroy);

const trabajosModel = require('../../models/trabajosModel');

const theLayout = 'admin/layout';
const theFolder = 'admin/trabajos';

// LISTAR
router.get('/', async function(req, res, next) {
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

    res.render(theFolder,{
        layout: theLayout,
        usuario: req.session.usuario,
        title: 'Listado de trabajos',
        objs
    });
});

// AGREGAR
router.get('/agregar', function(req, res, next) {
    res.render(theFolder+'/agregar',{
        layout: theLayout,
        usuario: req.session.usuario,
        title: 'Agregar trabajo'
    });
});

router.post('/agregar', async function(req, res, next) {
    try{
        // Upload Images
        let imagen_principal = imagen_trabajo = '';
        if(req.files && req.files.imagen_principal && Object.keys(req.files.imagen_principal).length>0){
            imagen_principal = (await uploader(req.files.imagen_principal.tempFilePath)).public_id;
        }
        if(req.files && req.files.imagen_trabajo && Object.keys(req.files.imagen_trabajo).length>0){
            imagen_trabajo = (await uploader(req.files.imagen_trabajo.tempFilePath)).public_id;
        }

        // SQL
        if(req.body.titulo!="" && req.body.subtitulo!="" && req.body.cuerpo!=""){
            await trabajosModel.insertar({
                ...req.body,
                imagen_principal,
                imagen_trabajo
            });
            res.redirect('/'+theFolder);
        }
        else{
            throw Error('Todos los campos son requeridos');
        }
    }
    catch(error_msg){
        res.render(theFolder+'/agregar',{
            layout: theLayout,
            usuario: req.session.usuario,
            error: true,
            message: error_msg
        });
    }
});

// MODIFICAR
router.get('/modificar/:id', async function(req, res, next) {
    let id = req.params.id;
    let obj = await trabajosModel.buscarPorId(id);

    let imagen_principal = imagen_trabajo = '';
    if(obj.imagen_principal) imagen_principal = cloudinary.url(obj.imagen_principal)
    if(obj.imagen_trabajo) imagen_trabajo = cloudinary.url(obj.imagen_trabajo)

    res.render(theFolder+'/modificar',{
        layout: theLayout,
        usuario: req.session.usuario,
        title: 'Modificar trabajo',
        obj: {
            ...obj,
            imagen_principal,
            imagen_trabajo
        },
        checkedDestacado: (obj.destacado=='1'? 'checked':'')
    });
});

router.post('/modificar/:id', async function(req, res, next) {
    let id = req.params.id;

    try{
        // Upload Images
        if(req.files && req.files.nue_imagen_principal && Object.keys(req.files.nue_imagen_principal).length>0){
            req.body.nue_imagen_principal = (await uploader(req.files.nue_imagen_principal.tempFilePath)).public_id;
        }

        if(req.files && req.files.nue_imagen_trabajo && Object.keys(req.files.nue_imagen_trabajo).length>0){
            req.body.nue_imagen_trabajo = (await uploader(req.files.nue_imagen_trabajo.tempFilePath)).public_id;
        }

        if(req.body.titulo!="" && req.body.subtitulo!="" && req.body.cuerpo!=""){
            await trabajosModel.modificar(req.body, id);

            res.redirect('/'+theFolder);
        }
        else{
            throw Error('Todos los campos son requeridos');
        }
    }
    catch(error_msg){
        const obj = await trabajosModel.buscarPorId(id);

        res.render(theFolder+'/modificar',{
            layout: theLayout,
            usuario: req.session.usuario,
            error: true,
            message: error_msg,
            obj
        });
    }
});

// ELIMINAR
router.get('/eliminar/:id', async function(req, res, next) {
    let id = req.params.id;

    // Delete images
    let obj = await trabajosModel.buscarPorId(id);
    if(obj.imagen_principal) await (destroyer(obj.imagen_principal));
    if(obj.imagen_trabajo) await (destroyer(obj.imagen_trabajo));

    await trabajosModel.eliminar(id);
    res.redirect('/'+theFolder);
});

module.exports = router;
