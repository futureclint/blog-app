import { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import './PostEdit.css';
import { getPost, updatePost } from '../../services/posts';

const PostEdit = (props) => {
  const [post, setPost] = useState({
    title: '',
    imgURL: '',
    content: '',
    author: '',
  })

  const [isUpdated, setUpdated] = useState(false)
  let { id } = useParams()
  
  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id)
      setPost(post)
    }
    fetchPost()
  }, [id])

  const handleChange = (ev) => {
    const { title, value } = ev.target.value
    setPost({
      ...post,
      [title]: value,
    })
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    const updated = await updatePost(id, post)
    setUpdated(updated)
  }

  // if (isUpdated) {
  //   return <Redirect to={`/posts/${id}`} />
  // }

  return (
    < Layout >
      <div className='post-edit'>
      <div className='image-container'>
          <img
            className='edit-post-image'
            src={post.imgURL}
            alt={post.title}
          />
          <form onSubmit={handleSubmit}>
            <input
              className='edit-input-image-link'
              placeholder='image-link'
              value={post.imgURL}
              name='imgURL'
              onChange={handleChange}
            />
        </form>
      </div>
      
      <form className='edit-form' onSubmit={handleSubmit}>
        <input
          className='input-title'
          placeholder='title'
          value={post.title}
          name='title'
          required
          onChange={handleChange}
        />
        <textarea
          className='textarea-content'
          placeholder='content'
          value={post.content}
          name='content'
          required
          onChange={handleChange}
        />
        <input
          className='input-author'
          placeholder='author'
          value={post.author}
          name='author'
          required
          onChange={handleChange}
        />

        <button type='submit' className='save-button'>
          save
        </button>
      </form>

      </div>
    </Layout >
  )
}

export default PostEdit;