let mysql = require('mysql');
let express = require('express');
let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'daan'
  });
  connection.connect();
  connection.query('SELECT * from info', function(err, data, fields) {
    if (err) {
      console.log(err);
      return;
    };
   
    console.log(data);
  });
   
  connection.end();