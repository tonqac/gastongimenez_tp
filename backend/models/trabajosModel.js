const pool = require('./database');

const listar = async () =>{
    try{
        let sql = 'select * from trabajos order by orden, anio desc, id desc';
        let rows = await pool.query(sql);
        return rows;
    }
    catch(error){
        console.log(error);
    }
}

const buscarPorId = async (id) =>{    
    try{
        let sql = 'select * from trabajos where id = ?';
        let rows = await pool.query(sql,[id]);
        return rows[0];
    }
    catch(error){
        console.log(error);
    }
}

const insertar = async (obj) =>{
    try{
        let sql = 'insert into trabajos set ?';
        let rows = await pool.query(sql,[obj]);
        return rows;
    }
    catch(error){
        console.log(error);
    }
}

const modificar = async (obj,id) =>{
    try{
        // Input checkbox
        if(obj.destacado!='1') obj.destacado='0';

        // Input files
        if(obj.nue_imagen_principal) obj.imagen_principal = obj.nue_imagen_principal;
        delete obj.nue_imagen_principal;

        if(obj.nue_imagen_trabajo) obj.imagen_trabajo = obj.nue_imagen_trabajo;
        delete obj.nue_imagen_trabajo;

        let sql = 'update trabajos set ? where id=?';
        let rows = await pool.query(sql,[obj,id]);
        return rows;
    }
    catch(error){
        console.log(error);
    }
}

const eliminar = async (id) =>{
    try{
        let sql = 'delete from trabajos where id = ?';
        let rows = await pool.query(sql,[id]);
        return rows;
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {listar,buscarPorId,insertar,modificar,eliminar}