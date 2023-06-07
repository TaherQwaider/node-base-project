var mysql = require('mysql');

var con = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
});


const dbConnection = (sql, cb) =>{
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        con.query(sql, async (err, result)=> {
            await cb(err, result);
        });
    });
};


module.exports = dbConnection