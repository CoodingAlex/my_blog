import React, { Fragment } from 'react';
import PostCardList from '../components/PostCardList'
import fakePosts from '../assets/mocks/fakePosts'
function Posts() {

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <PostCardList
            posts={fakePosts} className="col" />
        </div>
      </div>
    </Fragment>
  )
}

export default Posts;