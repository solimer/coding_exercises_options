const express = require('express');

const router = express.Router();

const { filterController } = require('../controllers');

router.post('/filter', filterController.filter);

module.exports = router;
