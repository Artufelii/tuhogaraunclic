import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginScreen from '../screens/LoginScreen'
import DashboardScreen from '../screens/DashboardScreen'
import { AdminContext } from '../AdminContext'

const AdminRouter = () => {
  const [usuario, setUsuario] = useState({});
  
  return(
    <AdminContext.Provider value={{
        usuario,
        setUsuario
      }}
    >
      <Switch>
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
