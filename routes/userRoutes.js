const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const joiMiddleware = require('../middlewares/joiMiddleware');
const userSchemas = require('../models/joi/userSchemas');

router.get('/listArray', userController.list);
router.get('/profile/:userId', userController.profile);
router.post('/create',
  joiMiddleware.validate(userSchemas.createUserSchema, 'body'),
  userController.create
);

router.get('/details/:id',
  joiMiddleware.validate(userSchemas.selectUserSchema, 'params'),
  userController.selectById
);
router.get('/list',
  joiMiddleware.validate(userSchemas.selectAllSchema, 'query'),
  userController.selectAll
);

module.exports = router;