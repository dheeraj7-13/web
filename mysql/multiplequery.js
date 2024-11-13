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

var stat = "INSERT INTO customer(custid,custname,address) VALUES ?"
let studentdata=[
    [1312,'veekesh','bandra'],
    [1313,'james','andheri'],
    [1314,'tiger','borivali']
];

con.query(stat,[studentdata],function(err){
    if(err)throw err;
    console.log("rows inserted!!");
})


con.query("SELECT * from customer",function(err,results){
    if(err)throw err;
    console.log(results);
})
