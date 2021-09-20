import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css';
import axios from './components/axios'
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

  const handleSubmit = async (payload) => {

    const { name, email, phone, message } = payload

    setProcessing(true)

    const response = await axios({
      method: 'POST',
      url: '/send-message',
      data: {
        name,
        email,
        phone,
        message,
      }
    })
    setClient(response.data.newClient.name)
    setSucceeded(true)
    setProcessing(false)

    setTimeout(() => {
      setSucceeded(false)
      setClient("")
    }, 10000)

  }

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
            <Propiedades />
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
            />
          </Route>
        </Switch>
        <Footer />
      </div>
  );
}

export default App;
