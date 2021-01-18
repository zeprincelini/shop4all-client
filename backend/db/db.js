const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "shop4all"
});

connection.connect((err) => {
    if(err){
        console.log("Connection failed" + JSON.stringify(err, undefined));
    }
    console.log("Connection Successful");
});

//connection.query("insert into 'signin'('first_name', 'last_name', 'email', 'pass')values('ohayo', 'minna', 'oohayo@hmail.com', '123dhhsgd')");
// connection.query("select * from register", (error, result, fields) => {
//     if(error){
//         return console.log(error.message);
//     }
//     console.log(result);
// });
module.exports = connection;