import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/PostCard.css'
function PostCard({ postImage, postTitle, postContent, postId }) {
  return (
    <div className="PostCard mt-5 mr-4 shadow">
      <Link to={`/posts/${postId}`} className="text-decoration-none text-reset">
        <div className="card mb-3 h-100 PostCard-container" >
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={postImage} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{postTitle}</h5>
                <p className="card-text">{postContent}</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <button className="btn btn-dark">See more...</button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PostCard;