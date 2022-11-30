//引入express
const express = require('express');

//创建应用对象
const app = express();

//创建路由规则
app.get('/', (request, response) => {
    response.send('HELLO EXPRESS');
})

//监听端口，启动服务
app.listen(8000, () => {
    console.log("服务已经启动，8000端口监听中...");
})