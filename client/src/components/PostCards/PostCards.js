import './PostCards.css';

import { useState, useEffect } from 'react';

import PostCard from '../PostCard/PostCard.js';
import { getPosts } from '../../services/posts.js';

const PostCards = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts()
      setPosts(allPosts)
    }
    fetchPosts()
  }, [])

  const CARDS = posts
    .reverse()
    .map((post, index) =>
      index < 8 ? (
        <PostCard
          _id={post._id}
          title={post.title}
          imgURL={post.imgURL}
          content={post.content}
          author = {post.author}
          key={index}
        />
      ) : null
    )

  return (
    <div className='post-cards'>
      <div className='latest'>LATEST</div>
      <div className='cards'>{CARDS}</div>
    </div>
  )
}

export default PostCards;
