const http = require('http');


http.createServer(function(request,response){
  console.log('requst come',request.url);


  //浏览器跨域的限制  不设置 不代表就没有发送请求
  // 而是 已经发送了也返回了只是被浏览器在解析时发现没有头所以 给拦截了 
  // 需要服务器同意跨域才能接受到返回的内容
  response.writeHead(200,{
    "Access-Control-Allow-Origin":"*",    // *  代表所有的ip都可以访问   可以设置为允许访问的地址
    "Access-Control-Allow-Headers":"X-Test-Cors",  //允许访问的头 的 预验证
    "Access-Control-Allow-Methods": "Post,PUT,Delete",  //允许除本身三种以外的请求方式请求
    "Access-Control-Max-Age":"1000"     //在多长时间内不用发起与请求验证
  });
  //在使用标签的src 如 a img 等... 发送跨域请求的时候浏览器是不会在意   是否同意请求的
  response.end('123');

}).listen(8887);

console.log('server listening on 8887');