const express = require('express');
const routes = express.Router();
const findone_controller = require('../../controllers/find_functions/findone_controller');

routes.get('/findone', findone_controller);

module.exports = routes;