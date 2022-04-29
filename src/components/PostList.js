import React from 'react';
import { useSelector } from "react-redux";

import { PostDetail } from './PostDetail';

export const PostList = () => {
  const { posts } = useSelector(state => state);
  return (
    <>
    { posts &&
        posts.map(post => <PostDetail post={post} key={post.id} />)
      }
    </>
  )
}
