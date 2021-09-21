import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css';
import { getInfo, sendInfo } from './helpers'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Propiedades from './components/Propiedades'
import Contacto from './components/Contacto'
import Servicios from './components/Servicios'
import Blog from './components/Blog'
import Article from './components/Article'
import Property from './components/Property'

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

    getInfo('propiedades', '')
      .then(response => setProperties(response.data.propiedades))
    
  }, [setProperties])

  return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/propiedades/:slug">
            <Property 
              handleSubmit={ handleSubmit }
              client= { client }
              processing= { processing }
              succeeded= { succeeded }
              title='¿Te gusta esta propiedad? ¡Apartala ahora!'
            />
          </Route>
          <Route path="/blog/:slug">
            <Article />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/propiedades">
            <Propiedades properties={ properties }/>
          </Route>
          <Route path="/servicios">
            <Servicios />
          </Route>
          <Route path="/contacto">
            <Contacto 
              handleSubmit={ handleSubmit }
              client= { client }
              processing= { processing }
              succeeded= { succeeded }
            />
          </Route>
          <Route exact path="/">
            <Home
              handleSubmit={ handleSubmit }
              client= { client }
              processing= { processing }
              succeeded= { succeeded }
              properties={ properties }
            />
          </Route>
        </Switch>
        <Footer />
      </div>
  );
}

export default App;
