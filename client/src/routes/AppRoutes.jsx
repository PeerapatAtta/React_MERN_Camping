import About from '@/pages/About';
import Dashboard from '@/pages/admin/Dashboard';
import Manage from '@/pages/admin/Manage';
import Home from '@/pages/Home';
import Notfound from '@/pages/Notfound';
import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from "react-router";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={
          <>
            <h1>Main Navbar</h1>
            <Outlet />
          </>}>
          <Route index element={<Home/>} />
           <Route path="about" element={<About/>} />
        </Route>     
       
        {/* Private */}
        <Route path="admin" element={
          <>
            <h1>Admin Navbar</h1>
            <Outlet />
          </>}>
          <Route index element={<Dashboard/>} />
          <Route path="manage" element={<Manage/>} />
        </Route>

        <Route path="*" element={<Notfound/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes