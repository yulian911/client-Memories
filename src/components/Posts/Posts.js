import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";

const Posts = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <>
      {posts.map((post) => (
        <Post
          title={post.title}
          message={post.message}
          tags={post.tags}
          selectedFile={post.selectedFile}
        />
      ))}
    </>
  );
};

export default Posts;
