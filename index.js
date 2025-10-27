const app = require('./config/server_config.js');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = require('./config/db_config.js');
const port = 8080;

const {user_schema} = require('./schemas/user_schema.js');

(() => {
    sequelize.sync({ alter: true }).then(() => {
        //here there are two option to pass
        //1. alter true : force orm to adjust table according to the model.
        //like suppos we only have 2 column in table, now in the model when we create another coulumn then 
        //alter : true will allow to add a new column.
        //2. force true : this will entirely create new table eveverything when there is a changes in the table.
        //first it will drop the table then create new table. 
        app.listen(port, () => {
            console.log(`server started : http://localhost:${port}`);
        })
    })
        .catch(err => {
            console.log('error occured while db connection', err);
        })
})();


