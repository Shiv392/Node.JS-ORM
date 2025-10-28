const express = require('express');
const routes = express.Router();
const findbypk_controller = require('../../controllers/find_functions/findbypk_controller');

routes.get('findbypk', findbypk_controller);

module.exports = findbypk_controller;