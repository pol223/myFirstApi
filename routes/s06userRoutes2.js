const express = require('express');
const router = express.Router();

const middleware = require('../middlewares/s06userMiddlewer2');

router.get('/numero',middleware.numero);

module.exports = router;