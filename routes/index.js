const express = require('express');
const routes  = express.Router();

const findone_routes = require('./find_functions/findone_route');
const findall_routes = require('./find_functions/findall_routes');
const findbypk_routes = require('./find_functions/findbypk_routes');
const findor_create_routes = require('./find_functions/findor_create_routes');

routes.use(findone_routes);
routes.use(findall_routes);
routes.use(findbypk_routes);
routes.use(findor_create_routes);

module.exports = routes;