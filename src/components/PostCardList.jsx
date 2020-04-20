import React, { Fragment } from 'react'
import PostCard from './PostCard'

function slicePostDescription(props) {
  return props.posts.map(post => {
    if (post.content.length > 50 || post.title.length > 30) {
      return { ...post, title: post.title.substring(0, 30), img: post.img, description: (post.content.substring(0, 150) + "...") }
    }
    return { ...post, description: post.content }
  })
}
function PostCardList(props) {

  let postMocks = slicePostDescription(props);
  return (
    <Fragment>

      {postMocks.map(post => {

        return (
          < PostCard key={post.id}
            postImage={post.img}
            postTitle={post.title}
            postContent={post.description}
            postId={post.id}
          />
        )
      }
      )}
    </Fragment>
  )
}
export default PostCardList;