const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
var querystring = require('querystring');
let myQuery = require('./mysqlTool');
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
        // fs.readFile('index.html',function(data,err){
        //           res.writeHead(200, {
        //       'Content-Type': 'text/html'
        //     })
        //     if (err) {
        //       res.end(err);
        //     } else {
        //       res.end(data);
        //     }
        // })
        res.write('no this!');
        res.end();
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
           
            //   connection.query('insert into info (ip,query,daan,date) value (?,?,?,?)',[ip,data.query,data.daan,data.date], function (error, results) {
            //     if (error) throw error;
            //     console.log(JSON.stringify(results));
            // });

            myQuery('insert into info (ip,query,daan,date) value (?,?,?,?)',[ip,data.query,data.daan,data.date], function (error, results) {
              if (error) throw error;
              console.log(JSON.stringify(results));
          });
        
            
          
           res.write(JSON.stringify({
               success: true,
           }));
           res.end();
           
       });
    
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

    myQuery('select * from info',null, function (error, results) {
      if (error) throw error;
      console.log(JSON.stringify(results));
      res.write(JSON.stringify({
        data: results,
        success:true
    }));
    res.end();
    });
      // connection.query('select * from info', function (error, results) {
      //   if (error) throw error;
      //   console.log(JSON.stringify(results));
      //   res.write(JSON.stringify({
      //     data: results,
      //     success:true
      // }));
      // res.end();
      // });
    }
     
    let img = new RegExp('.(jpg|ico)');
    let font = new RegExp('.fon');
    let audio = new RegExp('.mp3');
    if(img.test(pathname)){
      fs.readFile('static/img'+pathname,function(data,err){
        if (err) {
          res.end(err);
        } else {
          res.end(data);
        }
      })
    }
    
    if(font.test(pathname)){
      fs.readFile('static/font'+pathname,function(data,err){
        if (err) {
          res.end(err);
        } else {
          res.end(data);
        }
      })
    }
     
    if(audio.test(pathname)){
      fs.readFile('static/audio'+pathname,function(data,err){
        if (err) {
          res.end(err);
        } else {
          res.end(data);
        }
      })
    }
    
}).listen(8888,function(){
    console.log('linsten  in  8888')
})

