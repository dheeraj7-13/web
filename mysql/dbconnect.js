var mysql= require("mysql2");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"root",
    database:"student",
    port:3309
})
con.connect(function(err){
    if(err)throw err;
    console.log("Connected! to mysql");
});


var sql = "CREATE TABLE customer (" +
"custid INT PRIMARY KEY, " +
"custname VARCHAR(55), " +
"address VARCHAR(255))";  
con.query(sql,function (err) {
    if (err) throw err;
    console.log("Table created!")
})
// con.query("CREATE DATABASE facultyy",
// function(err)
// {
//     if(err) throw err;
//     console.log("faculty Database created");
// });
