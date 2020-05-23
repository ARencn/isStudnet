const http = require('http');
const fs=require('fs');
const wait=(seconds) => {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve()
    },seconds * 1000)
  })
}

http.createServer(function(request,respones){
  console.log('requst come',request.url);

  if(request.url==='/'){
    const html=fs.readFileSync('test.html','utf-8');
    respones.writeHead(200,{
      'Content-Type':'text/html'
  
    })
    respones.end(html);
  }

  if(request.url==='/data'){
    respones.writeHead(200,{
      // 'Cache-Control':'max-age=6,s-maxage=20,no-store'
      'Cache-Control':'s-maxage=200',
      'Vary':'X-Test-Cache'               //只有这个头都相等才会使用cache
    })
    wait(2).then(()=> respones.end('success'))
  }
  

}).listen(8888);

console.log('server listening on 8888');