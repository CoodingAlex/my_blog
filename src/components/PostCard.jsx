import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/PostCard.css'
function PostCard({ postImage, postTitle, postContent, postId }) {
  return (
    <div className="PostCard mt-5 mr-4 shadow">
      <Link to={`/posts/${postId}`} className="text-decoration-none text-reset">
        <div className="card mb-3 PostCard-container">
          <div className="card-body">
            {postImage && (
              <img className="PostCard-img " src={postImage} alt="Card image cap" />

            )}
            <h5 className="card-title">{postTitle}</h5>
            <p className="card-text">{postContent}</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PostCard;