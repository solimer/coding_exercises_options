const express = require('express');

const router = express.Router();

const { filterController } = require('../controllers');

router.get('/matches', filterController.filter);

module.exports = router;
