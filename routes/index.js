const express = require('express');
const routes  = express.Router();
const findone_routes = require('./find_functions/findone_route');
const findall_routes = require('./find_functions/findall_routes');
const findbypk_routes = require('./find_functions/findbypk_routes');

routes.use(findone_routes);
routes.use(findall_routes);
routes.use(findbypk_routes);

module.exports = routes;