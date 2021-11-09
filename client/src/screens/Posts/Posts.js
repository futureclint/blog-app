import './Posts.css';
import Post from '../../components/Post/Post';
import Layout from '../../components/Layout/Layout';

import { useEffect, useState } from 'react';
import { getPosts } from '../../services/posts.js';

const Posts = () => {
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts()
      setPosts(allPosts)
    }
    fetchPosts()
  }, [])


  if (!posts) return <h1>loading...</h1>


  return (
    <Layout>
      <div className='posts'>
        {posts.map((post, index) => {
          return (
            <Post
              _id={post._id}
              title={post.title}
              imgURL={post.imgURL}
              content={post.content}
              author = {post.author}
              key={index}
            />
          )
        })}
      </div>
      </Layout>
  )
}

export default Posts;