const express = require('express');
const router = express.Router();
const config_controller = require('../controllers/config.controller');

router.post("/validad6", config_controller.validad2)

module.exports = router;
