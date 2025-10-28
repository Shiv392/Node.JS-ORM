const express = require('express');
const routes  = express.Router();
const findone_routes = require('./find_functions/findone_route');
const findall_routes = require('./find_functions/findall_routes');

routes.use(findone_routes);
routes.use(findall_routes);

module.exports = routes;