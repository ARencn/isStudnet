const http=require('http');
const fs=require('fs');

http.createServer(function (request,response) {
  console.log('request come',request.url);

  const html=fs.readFileSync('test.html','utf8');
  const img=fs.readFileSync('img/1.jpg');


  if(request.url === '/'){
    response.writeHead(200,{
      'content-type':'text/html',
      'connection':'close'
    });
    response.end(html);

  }else{
    response.writeHead(200,{
      'content-type':'image/jpg',
      'connection':'close'
    });
    response.end(img);
  }


 
}).listen(7777);
console.log('server listening on 7777');