import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <div className='nav'>
        <NavLink className='blog-title' to='/'>Astringent</NavLink>
        <div className='links'>
          <NavLink className='link' to='/posts'>Posts</NavLink>
          <NavLink className='link' to='/add-posts'>Add a Post</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Nav;