const http = require('http');
const fs=require('fs');

http.createServer(function(request,respones){
  console.log('requst come',request.url);
 

    const html=fs.readFileSync('test.html');


    if(request.url=== '/'){

      //302 临时跳转   301  永久跳转 （从缓存中读取  可能无法读取到新的内容）
      respones.writeHead(302,{
        'location':'/new'
      }) 
   
    respones.end();

    }

    if(request.url==='/new'){
      respones.writeHead(200,{
        'Content-Type':'text/html',
      }) 
   
    respones.end('<div>this is content</div>');
    }

    

}).listen(8888);

console.log('server listening on 8888');