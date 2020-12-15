import React ,{useState,useEffect}from "react";
import axios from "axios";
import './App.css';
import Posts from "./components/Posts/Posts";
import Pagination from "./components/Paginations/Pagination";

const App = ()=>{
  const [posts,setPosts] = useState([]);
  const [loading,setLoading] = useState([false]);
  const [currentPage,setCurrentPage] = useState(1);
  const [totalPage,setTotalPage] = useState(1);
  const [perPageNumber] = useState(3);

  useEffect(()=>{
    //异步的async和await
    const requestPosts = async()=>{
      setLoading(true);
      //其实这里都是同步的，只是这里是异步的，异步的返回值要作为必要的值去作为后续的要求
      const response = await axios.get('http://localhost:3001/posts',{params:{currentPage,perPageNumber}});
      // console.log(response.data);
      setPosts(response.data.content)
      setTotalPage(response.data.totalPage)
      setLoading(false);
    }

    requestPosts()
  },[currentPage,perPageNumber])

  const requestPostByPage=(page)=>{
    if(page==='···'){
      return null
    }
    if(page === 0 || page>totalPage){
      return null;
    }
    setCurrentPage(page);
  }
  
  return (
    <div className="container">
      <h1 className="my-posts-title">我的文章</h1>
      <Posts posts={posts} loading={loading}></Posts>
      <Pagination totalPage={totalPage} requestPostByPage={requestPostByPage} currentPage={currentPage}></Pagination>
    </div>
  )
}

export default App;

ahahahaha

lololo
