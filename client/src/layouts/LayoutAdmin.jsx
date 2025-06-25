import React from 'react'
import { Outlet } from 'react-router'

const LayoutAdmin = () => {
  return (
    <div>
        <h1>AdminNavbar</h1>
        <hr />
        <Outlet />        
        </div>
  )
}

export default LayoutAdmin