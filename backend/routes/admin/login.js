var express = require('express');
var router = express.Router();
var usuariosModel = require('../../models/usuariosModel');

/* GET login page. */
router.get('/', function(req, res, next) {
    res.render('admin/login',{
        layout: 'admin/layout' // Le digo que use la cabecera principal
    });
});

/* POST login page. */
router.post('/', async(req,res,next)=>{
    try{
        var email = req.body.email;
        var clave = req.body.clave;

        if(email!="" && clave!=""){

            var data = await usuariosModel.getUsuarioLogin(email,clave);

            if(data!=undefined){
                // Genero sesión
                req.session.usuario = data;

                // Redirecciono
                res.redirect('/admin/trabajos');
            }
            else{
                res.render('admin/login',{
                    layout: 'admin/layout',
                    error: true,
                    message: 'Usuario y/o contraseña incorrectos.'
                });
            }
        }
        else{
            res.render('admin/login',{
                layout: 'admin/layout',
                error: true,
                message: 'Todos los datos son obligatorios.'
            });
        }
    }
    catch(error){
        console.log(error);
    }
});

/* GET logout page. */
router.get('/logout', function(req, res, next) {
    req.session.destroy();

    res.render('admin/login',{
        layout: 'admin/layout'
    });
});

module.exports = router;
