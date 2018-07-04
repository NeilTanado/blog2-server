var express = require('express');
var router = express.Router();
var Controller = require('../controller/userController');

/* GET users listing. */

router.post('/createuser', Controller.createUser);

router.get('/datauser',Controller.readUser)

router.post('/signin',Controller.signin)

router.put('/updateuser/:id',Controller.updateUser)

router.delete('/deleteuser/:id',Controller.deleteUser)

module.exports = router;
