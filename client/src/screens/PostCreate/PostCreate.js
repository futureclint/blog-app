import { useState } from 'react';
import './PostCreate.css';
import Layout from '../../components/Layout/Layout';
import { Navigate } from 'react-router-dom';
import { createPost } from '../../services/posts';

const PostCreate = (props) => {

  const [post, setPost] = useState({
            title: '',
            imgURL: '',
            content: '',
            author: ''
        })

    const [isCreated, setCreated] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target
        setPost({
                ...post,
                [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const created = await createPost(post)
        setCreated({ created })
    }

    if (isCreated) {
        return <Navigate to={`/posts`} />
    }
    return (
        <Layout>
            <form className="create-form" onSubmit={handleSubmit}>
                <input
                    className="input-name"
                    placeholder='Title'
                    value={post.title}
                    name='title'
                    required
                    autoFocus
                    onChange={handleChange}
                />
                <input
                    className="input-image-link"
                    placeholder='Image Link'
                    value={post.imgURL}
                    name='imgURL'
                    onChange={handleChange}
                />
                <textarea
                    className="textarea-content"
                    rows={10}
                    placeholder='Content'
                    value={post.content}
                    name='content'
                    required
                    onChange={handleChange}
                />
                <input
                    className="input-author"
                    placeholder='Author'
                    value={post.author}
                    name='author'
                    required
                    onChange={handleChange}
                />
                <button type='submit' className="submit-button">Submit</button>
            </form>
        </Layout>
    )

}

export default PostCreate;
