const express = require('express');
const router = express.Router();

const controller = require('../controllers/s05userController3');
const middleware = require('../middlewares/s05userMiddlewer3');

router.get('/factorial', middleware.checkNumQueryParam, middleware.checkNumQueryInteger,controller.factorial);

module.exports = router;