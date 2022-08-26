const express = require('express');
const router = express.Router();
const usuariosModel = require('../../models/usuariosModel');

/* GET login page. */
router.get('/', (req, res, next)=>{
    res.render('admin/login',{
        layout: 'admin/layout', // Le digo que use la cabecera principal
        title: 'Inicio de sesión'
    });
});

/* POST login page. */
router.post('/', async(req,res,next)=>{
    try{
        let email = req.body.email;
        let clave = req.body.clave;

        if(email!="" && clave!=""){

            let data = await usuariosModel.getUsuarioLogin(email,clave);

            if(data!=undefined){
                // Genero sesión
                req.session.usuario = data;

                // Redirecciono
                res.redirect('/admin/trabajos');
            }
            else{
                throw Error('Usuario y/o contraseña incorrectos.');
            }
        }
        else{
            throw Error('Todos los datos son obligatorios.');
        }
    }
    catch(error_msg){
        res.render('admin/login',{
            layout: 'admin/layout',
            error: true,
            message: error_msg
        });
    }
});

/* GET logout page. */
router.get('/logout', (req, res, next)=>{
    req.session.destroy();

    res.render('admin/login',{
        layout: 'admin/layout'
    });
});

module.exports = router;
