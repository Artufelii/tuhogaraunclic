import React, { useContext } from 'react'
import Sidebar from './Sidebar'
import SidebarShort from './SidebarShort'
import AdminHeader from './AdminHeader'
import { AdminContext } from '../AdminContext'
import './css/AdminLayout.css'

const AdminLayout = ({ children }) => {
  const { hiddenSidebar } = useContext(AdminContext)
  return(
    <div className={hiddenSidebar ? 'sidebar_show' : 'sidebar_hidden'}>
      {hiddenSidebar ? <Sidebar /> : <SidebarShort /> }
      <AdminHeader />
      { children }
    </div>
  ) 
}

export default AdminLayout
