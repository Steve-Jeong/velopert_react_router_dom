import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <NavLink exact to="/" className="item" activeClassName="active">Home NavLink</NavLink>
      <NavLink to="/about/Steve" className="item" activeClassName="active">Introduction NavLink About</NavLink>
      <NavLink to="/main" className="item" activeClassName="active">Main NavLink</NavLink>
      <NavLink to="/posts" className="item" activeClassName="active">포스트</NavLink>
      <NavLink to="/me" className="item" activeClassName="active">My Page</NavLink>
      <NavLink to="/login" className="item" activeClassName="active">Login</NavLink>
      <NavLink to="/search" className="item" activeClassName="active">Search</NavLink>
    </div>
  )
}

export default Header
