const http = require('http');
const fs=require('fs');

http.createServer(function(request,respones){
  console.log('requst come',request.url);
  const host=request.headers.host;


    const html=fs.readFileSync('test.html','utf8');

    if(host === 'a.test.com'){
      respones.writeHead(200,{
        'Content-Type':'text/html',
        'Set-Cookie':['id=123;max-age=2','abc=345;HttpOnly']
      })
    }
   
    respones.end(html);

}).listen(8888);

console.log('server listening on 8888');