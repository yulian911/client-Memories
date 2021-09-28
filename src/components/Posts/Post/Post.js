import React from "react";
import useStyles from "./styles";

const Post = ({ title, message, selectedFile, tags }) => {
  const classes = useStyles();
  return (
    <div>
      <p>{title}</p>
      <p>{tags}</p>
      <p>{message}</p>
    </div>
  );
};

export default Post;
