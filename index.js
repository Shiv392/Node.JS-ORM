const app = require('./config/server_config.js');
const port = 8080;

app.listen(port, ()=>{
    console.log(`server started : http://localhost:${port}`);
})