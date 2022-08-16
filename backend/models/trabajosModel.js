var pool = require('./database');

async function listar(){
    try{
        var sql = 'select * from trabajos order by orden, anio desc, id desc';
        var rows = await pool.query(sql);
        return rows;
    }
    catch(error){
        console.log(error);
    }
}

async function buscarPorId(id){
    try{
        var sql = 'select * from trabajos where id = ?';
        var rows = await pool.query(sql,[id]);
        return rows[0];
    }
    catch(error){
        console.log(error);
    }
}

async function insertar(obj){
    try{
        var sql = 'insert into trabajos set ?';
        var rows = await pool.query(sql,[obj]);
        return rows;
    }
    catch(error){
        console.log(error);
    }
}

async function modificar(obj,id){
    try{
        // Input checkbox
        if(obj.destacado!='1') obj.destacado='0';

        // Input files
        if(obj.nue_imagen_principal!='') obj.imagen_principal = obj.nue_imagen_principal;
        delete obj.nue_imagen_principal;

        if(obj.nue_imagen_trabajo!='') obj.imagen_trabajo = obj.nue_imagen_trabajo;
        delete obj.nue_imagen_trabajo;

        var sql = 'update trabajos set ? where id=?';
        var rows = await pool.query(sql,[obj,id]);
        return rows;
    }
    catch(error){
        console.log(error);
    }
}

async function eliminar(id){
    try{
        var sql = 'delete from trabajos where id = ?';
        var rows = await pool.query(sql,[id]);
        return rows;
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {listar,buscarPorId,insertar,modificar,eliminar}