const express = require('express');
const body_parser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(body_parser.json());
app.use(cors());

app.get('/', (reques, response)=>{
    return response.json({success : true, message : 'this is get request'});
})

module.exports = app;