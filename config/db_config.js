const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    process.env.DATABASE_NAME, //database name to be connect
    process.env.DATABASE_USER, //user type of the db
    process.env.DATABASE_PASSWORD, //db password
    {
        host : process.env.DATABASE_HOST, //db hosting host
        dialect : 'mysql',  // db type to connect with like mysql, pgsql etc.
        logging : false, //set to true, if we want to see sql query logged. 
        pool : {
             max : 5, 
             min : 0,
             acquire : 30000,
             idle : 10000
        },
        define : {
            timestamps : true, //automtically create created_at and updated_at column in each model/table.
            underscored : true //use snake case like abc_pqr, if false then it will use camelCase like abcPqr 

        }
    }
)


module.exports = sequelize;