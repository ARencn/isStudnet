const http = require('http');
const fs=require('fs');
const zlib=require('zlib');
http.createServer(function(request,respones){
  console.log('requst come',request.url);
 

    const html=fs.readFileSync('test.html');


      respones.writeHead(200,{
        'Content-Type':'text/html',
        'Content-Encoding':'gzip'
      })
   
   
    respones.end(zlib.gzipSync(html));

}).listen(8888);

console.log('server listening on 8888');