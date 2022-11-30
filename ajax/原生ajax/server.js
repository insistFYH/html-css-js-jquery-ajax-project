//引入express
const express = require('express');

//创建应用对象
const app = express();

//创建路由规则
app.get('/server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Controll-Allow-Origin', '*');

    //设置响应体
    response.send('HELLO AJAX GET');
})
app.all('/server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Controll-Allow-Origin', '*');
    response.setHeader('Access-Controll-Allow-Header', '*');

    //设置响应体
    response.send('HELLO AJAX POST');
})
app.all('/json-server', (request, response) => {
        //设置响应头 设置允许跨域
        response.setHeader('Access-Controll-Allow-Origin', '*');
        response.setHeader('Access-Controll-Allow-Header', '*');

        //响应一个数据
        const data = {
            name: 'nihao'
        };
        //对对象进行字符串转换
        let str = JSON.stringify(data);

        //设置响应体
        response.send(str);
    })
    //无任何处理的延时响应
app.all('/delay', (request, response) => {
        //设置响应头 设置允许跨域
        response.setHeader('Access-Controll-Allow-Origin', '*');

        //设置响应体
        setTimeout(() => {
            response.send('延时响应！');

        }, 3000)

    })
    //监听端口，启动服务
app.listen(8000, () => {
    console.log("服务已经启动，8000端口监听中...");
})