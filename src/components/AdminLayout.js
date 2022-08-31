import React from 'react'
import Sidebar from './Sidebar'
import AdminHeader from './AdminHeader'
import './css/AdminLayout.css'

const AdminLayout = ({ children }) => {
  return(
    <div className="admin">
      <Sidebar />
      <AdminHeader />
      { children }
    </div>
  ) 
}

export default AdminLayout
