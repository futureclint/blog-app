import './Home.css';

import Layout from '../../components/Layout/Layout.js';
import { getPosts } from '../../services/posts.js';

const Posts = () => {
  
  return (
    <Layout>
      <div className='posts'>
        {getPosts.map((post, index) => {
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