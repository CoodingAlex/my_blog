import React, { useEffect, useState } from "react";
import "../assets/styles/PostPage.css";
import axios from "axios";
const API = (id) => `http://localhost:3001/posts/post/${id}`;
const Post = (props) => {
  const [post, setPost] = useState({});
  useEffect(() => {
    axios
      .get(API(props.match.params.id), { method: "GET" })
      .then((response) => {
        setPost(response.data[0]);
        console.log(response.data);
      });
  }, []);

  return (
    <div className="PostPage-container container">
      <div className="row">
        <div className="col"></div>
        <div className="col-8 pt-5">
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Post;
