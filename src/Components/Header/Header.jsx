import React from 'react'
import { Outlet } from 'react-router-dom'
import '../Header/header.css';

const Header = () => {
  return (
    <div className="header">
      <h1>Header</h1>
      <Outlet />
    </div>
  )
}

export default Header