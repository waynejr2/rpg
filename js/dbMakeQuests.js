

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


connection.query('drop table if exists quest', function(err, rows, fields) {
//connection.end();
  if (!err) {
    
  } else
    console.log('Error while performing dropping table quest.');
  });

  
var fields =    "title varchar(30), \
                questid varchar(30) \
                ";


var sql = "create table quest (" + fields + ")";

console.log("create quest table");

connection.query(sql, function(err, rows, fields) {
//connection.end();
  if (!err) {

  } else
    console.log('Error while performing creating table quest.');
  })
  
/*  
var fields = [ 'title varchar(30)', 'questid varchar(30)'];
var sql = "create table quest (?, ?)";
console.log("create quest table");
connection.query(sql, [fields], function(err, rows, fields) {
//connection.end();
  if (!err) {

  } else
    console.log('Error while performing creating table quest.');
  })
*/

/*  
connection.query('create table quest (  title varchar(30), questid varchar(30))', function(err, rows, fields) {
//connection.end();
  if (!err) {

  } else
    console.log('Error while performing Query.');
  });
*/

  var records = [
                ['introduction', 'quest00001'],
                ['talk to the trainer', 'quest00002'],
                ['kill orcs', 'quest00003'],
                ['kill mobs', 'quest00004'],
                ['kill gnolls', 'quest00005'],
                ['travel the world', 'quest00006']
];

 
var sql = "INSERT INTO quest (title, questid) VALUES ?";
 
 
var query = connection.query(sql, [records], function(err, result) {  
  if (!err) {
  } else
    console.log('Error while performing insert into table quest Query.');
});


connection.query('SELECT * from quest', function(err, rows, fields) {
//connection.end();
  if (!err) {
    console.log('The solution is: ', rows);
    console.log(rows.length);
    for (var i = 0 ; i < rows.length; i++) {
        //console.log(rows[i]);
        console.log("title: " + rows[i].title + " questid: " + rows[i].questid);
    }
  } else
    console.log('Error while performing select quest Query.');
  });
  
 
 

connection.query('drop table if exists task', function(err, rows, fields) {
//connection.end();
  if (!err) {
    
  } else
    console.log('Error while performing Query.');
  });
  
    
var fields =    "title varchar(30), \
                taskid varchar(30), \
                questid varchar(30), \
                type varchar(30) \
                ";


var sql = "create table task (" + fields + ")";

connection.query(sql, function(err, rows, fields) {
//connection.end();
  if (!err) {

  } else
    console.log('Error while performing creating table task.');
  })

/*  
connection.query('create table task ( title varchar(30), taskid varchar(30), questid varchar(30))', function(err, rows, fields) {
//connection.end();
  if (!err) {

  } else
    console.log('Error while performing Query.');
  });
*/  
  

  var records = [
                ['introduction', '001', 'quest00001', 'intro'],
                ['talk to the trainer', '002', 'quest00002', 'travel'],
                ['kill orcs', '003', 'quest00003', 'kill'],
                ['kill orcs', '004', 'quest00004', 'kill'],
                ['kill gnolls', '005', 'quest00004', 'kill'],
                ['kill kobolds', '006', 'quest00004', 'kill'],
                ['kill gnolls', '007', 'quest00005', 'kill'],
                ['go to A1', '008', 'quest00006', 'travel'],
                ['go to B2', '009', 'quest00006', 'travel'],
                ['go to C3', '010', 'quest00006', 'travel'],
                ['go to D4', '011', 'quest00006', 'travel']
];

 
var sql = "INSERT INTO task VALUES ?";
 
 
var query = connection.query(sql, [records], function(err, result) {
    console.log(result);
});


connection.query('SELECT * from task', function(err, rows, fields) {
//connection.end();
  if (!err) {
    console.log('The solution is: ', rows);
    console.log(rows.length);
    for (var i = 0 ; i < rows.length; i++) {
        //console.log(rows[i]);
        console.log("title: " + rows[i].title + " taskid: " + rows[i].taskid + " questid " + rows[i].questid  +" type: " + rows[i].type);
    }
  } else
    console.log('Error while performing Query.');
  });
  
  
  
connection.end();
  
  
  
  