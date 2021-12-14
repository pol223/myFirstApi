const express = require('express');
const userController1 = require('../controllers/userController1');
const router = express.Router();

const userController = require('../controllers/usercontroller1');

router.get('/01ejer', userController.fechamili);

router.get('/02ejer', userController.fechaform1);

router.get('/03ejer', userController.fechaform2);

module.exports = router;