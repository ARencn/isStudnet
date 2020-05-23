const http = require('http');
const fs=require('fs');

http.createServer(function(request,respones){
  console.log('requst come',request.url);



 

  if (request.url==='/'){
    const html=fs.readFileSync('test.html','utf8');

    respones.writeHead(200,{
      'Content-Type':'text/html' //text/plain(解析为纯字符内容)  multipart/form-data  application/x-www-form-urlencoded   除这三种请求外 其余的Content -Type  都需要 CORS预请求验证
                                //XMLHttpRequestUpload 对象均没有注册任何事件监听器
                                //请求中没有使用 ReadableStream 对象
                                //只允许3中方法请求 GET HEAD 
    })
    respones.end(html);
  }

  if (request.url==='/script.js'){
    const etag = request.headers['If-None-Match'];
    if(etag==='777'){
        respones.writeHead(304,{
          'Content-Type':'text/javascript',
          'Cache-Control' : 'max-age=20000000000', 
          'Last-Modified' : '123',
          'Etag': '777'
        })
        respones.end(' ');
    }else{
      const html=fs.readFileSync('test.html','utf8');

      respones.writeHead(200,{
        'Content-Type':'text/javascript',
        'Cache-Control' : 'max-age=20000000000,no-store', //以逗号分隔
        'Last-Modified' : '123',
        'Etag': '777'
      });
      respones.end('console.log("script loaded twice")');
    }

  
    
  }


}).listen(8888);

console.log('server listening on 8888');