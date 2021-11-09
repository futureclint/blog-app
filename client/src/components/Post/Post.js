import { Link } from 'react-router-dom'

const Post = (props) => {
  return (
    <div>
      <Link className='post' to={`/posts/${props._id}`}>
        <img className='post-image'
          src={props.imgURL}
          alt={props.title}
        />
        <div className='post-title'>{props.title}</div>
        <div className='content'>{props.content}</div>
        <div className='author'>{props.author}</div>
      </Link>
    </div>
  )
}

export default Post