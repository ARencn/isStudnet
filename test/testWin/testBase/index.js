var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'test'
});
connection.connect();
 
// connection.query('SELECT * from user', function (error, results, fields) {
//   if (error) throw error;
//   console.log(JSON.stringify(results));
// });
// connection.query('insert into user (name,password) value (?,?)',['zm','456'], function (error, results) {
//     if (error) throw error;
//     console.log(JSON.stringify(results));
//   });
// connection.query(`update user set name = 'zm' where name = 'zzr'`, function (error, results) {
//     if (error) throw error;
//     console.log(JSON.stringify(results));
//   });
// connection.query(`delete user where id = 1`, function (error, results) {
//     if (error) throw error;
//     console.log(JSON.stringify(results));
//   });

  connection.end();