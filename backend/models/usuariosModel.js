const pool = require('./database');
const md5 = require('md5');

const getUsuarioLogin = async(email,clave)=>{
    try{
        let sql = 'select * from usuarios where email = ? and clave = ? limit 1';
        let rows = await pool.query(sql,[email,md5(clave)]);
        return rows[0];
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {getUsuarioLogin}