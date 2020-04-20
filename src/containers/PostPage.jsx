import React from 'react';
import fakePosts from '../assets/mocks/fakePosts'

function getPost(id) {
  return fakePosts.filter(post => post.id.toString() === id)[0]
}

function Post(props) {
  let post = getPost(props.match.params.id)
  console.log(post);

  return (
    <div className="PostPage-container container">
      <div className="row">
        <div className="col"></div>
        <div className="col-8 pt-5">
          <img src={post.img} alt="" />
          <h1>{post.title}</h1>
          <p>{post.content}</p></div>
        <div className="col"></div>

      </div>
    </div>
  )
}

export default Post