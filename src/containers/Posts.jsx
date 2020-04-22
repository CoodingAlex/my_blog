import React, { Fragment, useEffect, useState } from "react";
import PostCardList from "../components/PostCardList";
import fakePosts from "../assets/mocks/fakePosts";
import axios from "axios";
const API = "http://localhost:3001/posts/0";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const result = await axios(API);
      if (!ignore) setPosts(result.data);
    }

    fetchData();
    return () => {
      ignore = true;
    };
  }, []);
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <PostCardList posts={posts || []} className="col" />
        </div>
      </div>
    </Fragment>
  );
};

export default Posts;
