const express = require('express');

const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', (req, res) => {
    controller.getUsers()
    .then( (userList) =>{
        response.success(req, res, userList, 200);
    })
    .catch( error => {
        response.error(req, res, 'Información invalida', 500, error)
    })
    
})

router.post('/', (req, res) => {

    controller.addUser(req.body.user, req.body.password)
    .then( (fullUser) =>{
        response.success(req, res, fullUser, 201);
    })
    .catch( error => {
        response.error(req, res, 'Información invalida', 400, 'Error en el controlador')
    })
    
})



module.exports = router;