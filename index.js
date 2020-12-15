const { resolve } = require('path');
const koa = require('koa');
const static = require('koa-static');


const app = new koa();

app.use(static(resolve(__dirname, './build'))).listen(3000);

console.log("port:3000")