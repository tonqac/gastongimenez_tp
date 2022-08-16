var express = require('express');
var router = express.Router();
var trabajosModel = require('../../models/trabajosModel');

var theLayout = 'admin/layout';
var theFolder = 'admin/trabajos';

// LISTAR
router.get('/', async function(req, res, next) {
    var objs = await trabajosModel.listar();

    

    res.render(theFolder,{
        layout: theLayout,
        usuario: req.session.usuario,
        objs
    });
});

// AGREGAR
router.get('/agregar', function(req, res, next) {
    res.render(theFolder+'/agregar',{
        layout: theLayout,
        usuario: req.session.usuario
    });
});

router.post('/agregar', async function(req, res, next) {
    try{
        if(req.body.titulo!="" && req.body.subtitulo!="" && req.body.cuerpo!=""){
            await trabajosModel.insertar(req.body);
            res.redirect('/'+theFolder);
        }
        else{
            res.render(theFolder+'/agregar',{
                layout: theLayout,
                usuario: req.session.usuario,
                error: true,
                message: 'Todos los campos son requeridos'
            });
        }
    }
    catch(error){
        console.log(error);

        res.render(theFolder+'/agregar',{
            layout: theLayout,
            usuario: req.session.usuario,
            error: true,
            message: 'Error interno. No se ingresaron los registros.'
        });
    }
});

// MODIFICAR
router.get('/modificar/:id', async function(req, res, next) {
    var id = req.params.id;
    var obj = await trabajosModel.buscarPorId(id);

    res.render(theFolder+'/modificar',{
        layout: theLayout,
        usuario: req.session.usuario,
        obj,
        checkedDestacado: (obj.destacado==1? 'checked':'')
    });
});

router.post('/modificar/:id', async function(req, res, next) {
    var id = req.params.id;

    try{
        if(req.body.titulo!="" && req.body.subtitulo!="" && req.body.cuerpo!=""){
            await trabajosModel.modificar(req.body, id);
            res.redirect('/'+theFolder);
        }
        else{
            var obj = await trabajosModel.buscarPorId(id);
            
            res.render(theFolder+'/modificar',{
                layout: theLayout,
                usuario: req.session.usuario,
                error: true,
                message: 'Todos los campos son requeridos',
                obj
            });
        }
    }
    catch(error){
        console.log(error);
        var obj = await trabajosModel.buscarPorId(id);

        res.render(theFolder+'/modificar',{
            layout: theLayout,
            usuario: req.session.usuario,
            error: true,
            message: 'Error interno. No se modificaron los registros.',
            obj
        });
    }
});

// ELIMINAR
router.get('/eliminar/:id', async function(req, res, next) {
    var id = req.params.id;
    await trabajosModel.eliminar(id);
    res.redirect('/'+theFolder);
});

module.exports = router;
