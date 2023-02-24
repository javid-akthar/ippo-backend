const express = require('express');
const router = express.Router();

router.use('/strong-password', require('./strongPassword'));

module.exports = router;