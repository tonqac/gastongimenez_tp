var pool = require('./database');
var md5 = require('md5');

async function getUsuarioLogin(email,clave){
    try{
        var sql = 'select * from usuarios where email = ? and clave = ? limit 1';
        //console.log(sql);
        var rows = await pool.query(sql,[email,md5(clave)]);
        return rows[0];
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {getUsuarioLogin}