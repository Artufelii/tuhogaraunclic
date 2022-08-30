import React from 'react'
import Sidebar from './Sidebar'
import './css/AdminLayout.css'

const AdminLayout = ({ children }) => {
  return(
    <div class="admin">
      <Sidebar />
      { children }
    </div>
  ) 
}

export default AdminLayout
