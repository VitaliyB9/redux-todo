import React from "react";
import { useDispatch } from "react-redux";
import { deletePostById } from "../features/post/postSlice";

const PostsItem = ({ post}) => {
  const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch(deletePostById(post.id))}>{post.title}</div>
  );
};

export default PostsItem;
