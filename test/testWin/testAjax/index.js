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

}).listen(80,function(){
    console.log('linsten  in  80')
})

