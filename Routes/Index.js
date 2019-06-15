const express = require('express');
const router = express.Router();
const indexControler = require('../Controllers/Index');

router.get('/', indexControler.index);

module.exports = router;
