const express = require('express');
const router = express.Router();

const middleware = require('../middlewares/s06userMiddlewer1');

router.get('/random',middleware.random);

module.exports = router;