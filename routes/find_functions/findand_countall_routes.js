const express = require('express');
const routes = express.Router();
const findand_countall_controller = require('../../controllers/find_functions/findand_countall_controller');

routes.get('/findcountall', findand_countall_controller);

module.exports = routes;