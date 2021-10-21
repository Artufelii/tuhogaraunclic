import React, { useEffect, useState, Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css';
import { getInfo, sendInfo } from './helpers'
import Header from './components/Header'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen';

const Home = lazy(() => import('./components/Home'))
const Propiedades = lazy(() => import ('./components/Propiedades')) 
const Property = lazy(() => import ('./components/Property')) 
const Servicios = lazy(() => import ('./components/Servicios')) 
const Contacto = lazy(() => import ('./components/Contacto')) 

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

    getInfo('properties', '')
      .then(response => setProperties(response.data.propiedades))
    
  }, [setProperties])

  return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/propiedades/:slug">
            <Suspense fallback={<LoadingScreen/>}>
              <Property 
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
              <Propiedades properties={ properties }/>
            </Suspense>
          </Route>
          <Route path="/servicios">
            <Suspense fallback={<LoadingScreen/>}>
              <Servicios />
            </Suspense>
          </Route>
          <Route path="/contacto">
            <Suspense fallback={<LoadingScreen/>}>
              <Contacto 
                handleSubmit={ handleSubmit }
                client= { client }
                processing= { processing }
                succeeded= { succeeded }
              />
            </Suspense>
          </Route>
          <Route exact path="/">
            <Suspense fallback={<LoadingScreen/>}>
              <Home
                handleSubmit={ handleSubmit }
                client= { client }
                processing= { processing }
                succeeded= { succeeded }
                properties={ properties }
              />
            </Suspense>
          </Route>
        </Switch>
        <Footer />
      </div>
  );
}

export default App;
