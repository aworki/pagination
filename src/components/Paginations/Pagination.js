import React from 'react'
import './Pagination.css'

export default function Pagination(props) {
  const {totalPage,requestPostByPage,currentPage} = props;
  let liArr = [];
  let allArr = []
  for(let i=0;i<totalPage;i++){
    //页码生成
    allArr.push(i+1);
  }
  //判断总页数小于10
  if(allArr.length<=10){
    liArr=allArr;
  }else{
    //当页数大于10，当前页小于5
    if(currentPage < 5){
      liArr = [...allArr.slice(0,5),'···',totalPage]
    }else{
      if(currentPage<=totalPage-4){
        liArr=[1,'···',...allArr.slice(currentPage-2,currentPage+1),'···',totalPage]
      }else{
        liArr=[1,'···',...allArr.slice(totalPage-5,totalPage)]
      }
    }
    //当总页数
  }

  return (
    <nav>
      <ul className="list-pages">
        <li className="list-pages-item" onClick={()=>{requestPostByPage(currentPage-1)}}>&lt;</li>
        { 
          liArr.map((item,index)=>(
            <li className={item==='···'?'':(item===currentPage?"list-pages-item-active":"list-pages-item")} key={index} onClick={()=>{requestPostByPage(item)}}>{item}</li>
          ))  
        }
        <li className="list-pages-item" onClick={()=>{requestPostByPage(currentPage+1)}}>&gt;</li>
      </ul>
    </nav>
  )
}
