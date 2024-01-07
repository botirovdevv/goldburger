import React from 'react'
import { Link } from 'react-router-dom'
import UserIcon from '../../assets/icons/UserIcon'


function User() {
  return (
    <Link to="/login" className='nav-user'>
      <UserIcon/>
    </Link>
  )
}

export default User