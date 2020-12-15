const express = require("express");
// const { mock, Random } = require("mockjs");
const Mock = require("mockjs");

const app = express();
//产生随机的数据
const Random = Mock.Random;

//简单的跨域
app.all('*',(req,res,next)=>{
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','Content-Type');
  res.header('Access-Control-Allow-Methods','*');
  res.header('Content-Type','application/json;charset=utf-8');
  next()
})

app.get('/posts',(req,res)=>{
  let number = 100;
  let posts = []
  for(let i=0;i<number;i++){
    //定义数据结构
    let data = Mock.mock({
      id:'',
      title:Random.title(1),
      content:Random.cparagraph(2,5),
      time:Random.datetime('yyyy-MM-dd hh:mm:ss'),
      author:Random.cname(),
      'like|1-1000':1
    })
    posts.push(data);
  }

  //设置每页的篇数
  let perPageNumber = Number(req.query.perPageNumber?req.query.perPageNumber: 10);

  //当前页码
  let currentPage = Number(req.query.currentPage?req.query.currentPage: 1);

  //需要多少页
  let totalPage = Math.ceil(posts.length/perPageNumber);

  //处理数据
  let start = ( currentPage - 1 ) * perPageNumber;
  let end = currentPage*perPageNumber <= posts.length?
  currentPage*perPageNumber:posts.length;

  posts = posts.slice(start,end)

  res.json({content:posts,currentPage,totalPage })
})



app.listen(3001,()=>{console.log('server port:3001')});
