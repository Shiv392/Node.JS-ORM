const express = require('express');
const routes = express.Router();
const findor_create_controller = require('../../controllers/find_functions/findor_create_controller');

routes.post('/find/create', findor_create_controller);

module.exports = routes;