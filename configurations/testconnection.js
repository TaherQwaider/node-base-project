const dbConnection = require('./mysql_db');



dbConnection('select * from users', (err, result) => {
    console.log(result);
})

