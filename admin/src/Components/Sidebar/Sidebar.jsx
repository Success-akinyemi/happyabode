import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="top">
            <h1 className='logo'>HappyAbode</h1>
        </div>

        <div className="navLinks">
            <Link className='link navlink' to='/'>View House</Link>
            <Link className='link navlink' to='/newHouse'>Add New House</Link>
            <Link className='link navlink' to='/newuser'>Add New User</Link>
        </div>
    </div>
  )
}

export default Sidebar