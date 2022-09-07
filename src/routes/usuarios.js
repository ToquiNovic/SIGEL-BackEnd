const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/usuarios' || '/Usuarios' || '/USUARIOS', (req, res) => {
    mysqlConnection.query('SELECT * FROM usuario', (err,rows,fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);            
        }
    })
} )

router.get('/usuarios/id/:id', (req,res) => {
    const {id} = req.params;
    mysqlConnection.query('SELECT * FROM usuario WHERE id= ?', [id],(err,rows,fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);            
        }
    })
});

//INGRESAR
router.post('/registrar/usuarios',(req,res) => {
    const {id,nombre1,nombre2,apellido1,apellido2,n_identificacion,tipo_usuario} = req.body;
    const query = `
    insert into usuario (id,nombre1,nombre2,apellido1,apellido2,n_identificacion,tipo_usuario) values (?,?,?,?,?,?,?)
    `;
   mysqlConnection.query(query, [id,nombre1,nombre2,apellido1,apellido2,n_identificacion,tipo_usuario], (err,rows,fields) =>{
        if (!err) {
            res.json({Status: 'Usuario Guardado'});
        } else {
            console.log(err);            
        }
   })
});

//ACTUALIZAR
router.post('/actualizar/usuarios',(req,res) => {

});


module.exports = router;