const express = require('express');
const routes = express.Router();
const findall_controller = require('../../controllers/find_functions/findall_controller');

routes.use('/findall', findall_controller);

module.exports = routes;