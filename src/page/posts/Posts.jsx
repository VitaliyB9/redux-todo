import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PostsItem from "../../components/PostsItem";
import { getPosts } from "../../features/post/postSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);

  return (
    <div>
      <button type="submit" onClick={() => dispatch(getPosts())}>
        GetPost
      </button>
      {posts.map((post) => (
        <PostsItem key={post.title} post={post} />
      ))}
    </div>
  );
};

export default Posts;
