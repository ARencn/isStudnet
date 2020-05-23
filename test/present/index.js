const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
var querystring = require('querystring');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'daan'
  });
  
  connection.connect();
//传入请求HttpRequest
function getClientIp(req) {
    return req.headers['x-forwarded-for'] || // 判断是否有反向代理 IP
    req.connection.remoteAddress || // 判断 connection 的远程 IP
    req.socket.remoteAddress || // 判断后端的 socket 的 IP
    req.connection.socket.remoteAddress;
}
http.createServer(function(req,res){
  
    let pathname = url.parse(req.url).pathname;
    let date = new Date();
    let ip ;
    res.writeHead(200, {
        'Content-type': 'text-plain;charset=utf-8;',
        'Access-Control-Allow-Origin': '*'
    });
    console.log(pathname)
    if(pathname == '/'){
        fs.readFile('index.html',function(data,err){
                  res.writeHead(200, {
              'Content-Type': 'text/html'
            })
            if (err) {
              res.end(err);
            } else {
              res.end(data);
            }
        })
    }
    if(pathname == '/female.jpg'){
        fs.readFile('static/img/female.jpg',function(data,err){
            if (err) {
              res.end(err);
            } else {
              res.end(data);
            }
        })
    }
    if(pathname == '/mei.jpg'){
        fs.readFile('static/img/mei.jpg',function(data,err){
            if (err) {
              res.end(err);
            } else {
              res.end(data);
            }
        })
    }
    if(pathname == '/male.jpg'){
        fs.readFile('static/img/male.jpg',function(data,err){
            if (err) {
              res.end(err);
            } else {
              res.end(data);
            }
        })
    }
    if(pathname == '/favicon.ico'){
        fs.readFile('static/img/favicon.ico',function(data,err){
            if (err) {
              res.end(err);
            } else {
              res.end(data);
            }
        })
    }
    if(pathname == '/xjlFont.fon'){
        fs.readFile('static/font/xjlFont.fon',function(data,err){
            if (err) {
              res.end(err);
            } else {
              res.end(data);
            }
        })
    }
    if(pathname == '/lai.mp3'){
        fs.readFile('static/audio/lai.mp3',function(data,err){
            if (err) {
              res.end(err);
            } else {
              res.end(data);
            }
        })
    }
    if(pathname == '/yu.mp3'){
        fs.readFile('static/audio/yu.mp3',function(data,err){
            if (err) {
              res.end(err);
            } else {
              res.end(data);
            }
        })
    }
    if(pathname == '/save'){
      
       // console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()},have a perpor`);
       var post = '';
       req.on('data', function(chunk) {
           post += chunk;
       });
       req.on('end', function() {
         //  post = querystring.parse(post);
           console.log(JSON.stringify(post));
            if(getClientIp(req).indexOf ('::ffff:') != -1){
                ip = getClientIp(req).replace('::ffff:','');
            }
            console.log(ip);
        
            var data =JSON.parse(post) ;
            console.log(data.query);
            connection.query('insert into info (ip,query,daan,date) value (?,?,?,?)',[ip,data.query,data.daan,data.date], function (error, results) {
                if (error) throw error;
                console.log(JSON.stringify(results));
            });
           res.write(JSON.stringify({
               success: true,
           }));
           res.end();
       });
      // connection.end();
    }
    if(pathname == '/look'){
      fs.readFile('look.html',function(data,err){
        if (err) {
          res.end(err);
        } else {
          res.end(data);
        }
    })
      // connection.query('SHOW COLUMNS FROM info', function (error, results) {
      //   if (error) throw error;
      //   console.log(JSON.stringify(results));
      // });
   
    }

    if(pathname == '/lookData'){
      
      res.writeHead(200, {
        'Content-type': 'application/json;charset=utf-8;',
        'Access-Control-Allow-Origin': '*'
    });
      connection.query('select * from info', function (error, results) {
        if (error) throw error;
        console.log(JSON.stringify(results));
        res.write(JSON.stringify({
          data: results,
          success:true
      }));
      res.end();
      });
    }
     
   
    
}).listen(8888,function(){
    console.log('linsten  in  8888')
})

