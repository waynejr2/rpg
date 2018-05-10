

var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'rpg'
});

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Error connecting database ... nn");    
}
});


connection.query('drop table user', function(err, rows, fields) {
//connection.end();
  if (!err) {
    
  } else
    console.log('Error while performing Query.');
  });
  
connection.query('create table user (first varchar(20), last varchar(20), sex varchar(1))', function(err, rows, fields) {
//connection.end();
  if (!err) {

  } else
    console.log('Error while performing Query.');
  });
  
  

connection.query('SELECT * from user LIMIT 2', function(err, rows, fields) {
//connection.end();
  if (!err) {
    console.log('The solution is: ', rows);
    console.log(rows.length);
    for (var i = 0 ; i < rows.length; i++) {
        console.log(rows[i]);
        console.log("first: " + rows[i].first + " last: " + rows[i].last);
    }
  } else
    console.log('Error while performing Query.');
  });
  
  var records = [
                ['chloe', 'bennet', 'f'],
                ['wayne', 'rasmussen', 'm'],
                ['super', 'girl', 'f'],
                ['jim', 'slade', 'm'],
                ['bill', 'lumburg', 'm']
];

 
var sql = "INSERT INTO user (first, last, sex) VALUES ?";
 
 
var query = connection.query(sql, [records], function(err, result) {
    console.log(result);
});


connection.query('SELECT * from user', function(err, rows, fields) {
connection.end();
  if (!err) {
    console.log('The solution is: ', rows);
    console.log(rows.length);
    for (var i = 0 ; i < rows.length; i++) {
        //console.log(rows[i]);
        console.log("first: " + rows[i].first + " last: " + rows[i].last);
    }
  } else
    console.log('Error while performing Query.');
  });