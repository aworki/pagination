import React from 'react'
import './Posts.css'

export default function Posts(props) {
  const {posts,loading} = props;
  if(loading){
    return(
      <h3>Loading</h3>
    )
  }else{
    return (
      <ul className="list-posts">
        {
          posts.map(v=>(
            <li key={v.id} className="list-posts-item">
              <h3>{v.title}</h3>
              <p>{v.content}</p>
              <section className="post-panel">
                <span className="post-time">发表时间：{v.time}</span>
                <span className="post-author">作者：{v.author}</span>
                <span className="post-like">♥ {v.like}</span>
              </section>
            </li>
          ))
        }
      </ul>
    )
  }
  
}


