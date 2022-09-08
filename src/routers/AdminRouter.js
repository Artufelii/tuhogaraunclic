import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginScreen from '../screens/LoginScreen'
import DashboardScreen from '../screens/DashboardScreen'
import { AdminContext } from '../AdminContext'
import addPropertyScreen from '../screens/addPropertyScreen'

const AdminRouter = () => {
  const [usuario, setUsuario] = useState({});
  const [hiddenSidebar, setHiddenSidebar] = useState(false)
  
  return(
    <AdminContext.Provider value={{
        usuario,
        setUsuario,
        hiddenSidebar,
        setHiddenSidebar
      }}
    >
      <Switch>
        <Route path="/admin/propiedades/new-property">
          <addPropertyScreen />
        </Route>
        <Route path="/admin/login">
          <LoginScreen />
        </Route>
        <Route path="/admin/dashboard">
          <DashboardScreen />
        </Route>
    </Switch>

    </AdminContext.Provider>
  ) 
}
export default AdminRouter
