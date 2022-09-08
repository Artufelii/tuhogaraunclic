import React, { useEffect, useState, Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'
import { getInfo, sendInfo } from './helpers'
import LoadingScreen from './screens/LoadingScreen'
import AdminRouter from './routers/AdminRouter'
import './App.css';

const HomeScreen = lazy(() => import('./screens/HomeScreen'))
const PropertysScreen = lazy(() => import ('./screens/PropertysScreen')) 
const PropertyScreen = lazy(() => import ('./screens/PropertyScreen')) 
const ServicesScreen = lazy(() => import ('./screens/ServicesScreen')) 
const ContactScreen = lazy(() => import ('./screens/ContactScreen')) 

const App = () => {
  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [client, setClient] = useState("")
  const [ properties, setProperties ] = useState([])

  const handleSubmit = (payload) => {
    setProcessing(true)
    sendInfo(payload)
      .then(response => setClient(response.data.newClient.name))
      .then(setSucceeded(true))
      .then(setProcessing(false))
    setTimeout(() => {
      setSucceeded(false)
      setClient("")
    }, 10000)
  }

  useEffect(() => {
    setProcessing(true)
    getInfo('properties', '')
      .then(response => {
        setProperties(response.data.propiedades)
      })
      .then(setProcessing(false))
  }, [setProperties, setProcessing])

  return (
      <div className="App">
        <Switch>
          <Route path="/admin/*">
            <AdminRouter />
          </Route>
          <Route path="/propiedades/:slug">
            <Suspense fallback={<LoadingScreen/>}>
              <PropertyScreen 
                handleSubmit={ handleSubmit }
                client= { client }
                processing= { processing }
                succeeded= { succeeded }
                title='¿Te gusta esta propiedad? ¡Apartala ahora!'
              />
            </Suspense>
          </Route>
          <Route path="/propiedades">
            <Suspense fallback={<LoadingScreen/>}>
              <PropertysScreen properties={ properties }/>
            </Suspense>
          </Route>
          <Route path="/servicios">
            <Suspense fallback={<LoadingScreen/>}>
              <ServicesScreen />
            </Suspense>
          </Route>
          <Route path="/contacto">
            <Suspense fallback={<LoadingScreen/>}>
              <ContactScreen 
                handleSubmit={ handleSubmit }
                client= { client }
                processing= { processing }
                succeeded= { succeeded }
              />
            </Suspense>
          </Route>
          <Route exact path="/">
            <Suspense fallback={<LoadingScreen/>}>
              <HomeScreen
                handleSubmit={ handleSubmit }
                client= { client }
                processing= { processing }
                succeeded= { succeeded }
                properties={ properties }
              />
            </Suspense>
          </Route>
        </Switch>
      </div>
  );
}

export default App;
