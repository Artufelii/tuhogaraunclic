import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginScreen from '../screens/LoginScreen'
import DashboardScreen from '../screens/DashboardScreen'

const AdminRouter = () => {
  return(
    <Switch>
      <Route path="/admin/login">
        <LoginScreen />
      </Route>
      <Route path="/admin/dashboard">
        <DashboardScreen />
      </Route>
    </Switch>
  ) 
}
export default AdminRouter
