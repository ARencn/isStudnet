const express = require('express')
const app =  new express();
app.use(express.static('./page'));
app.listen(12306)
console.log('12306')