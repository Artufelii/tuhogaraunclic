import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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

function App() {

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
    <Router>
      <div className="App">
        <Switch>
          <Route path="/propiedades/:slug">
            <Header />
            <Property />
            <Footer />
          </Route>
          <Route path="/blog/:slug">
            <Header />
            <Article />
            <Footer />
          </Route>
          <Route path="/blog">
            <Header />
            <Blog />
            <Footer />
          </Route>
          <Route path="/propiedades">
            <Header />
            <Propiedades />
            <Footer />
          </Route>
          <Route path="/servicios">
            <Header />
            <Servicios />
            <Footer />
          </Route>
          <Route path="/contacto">
            <Header />
            <Contacto 
              handleSubmit={ handleSubmit }
              client= { client }
              processing= { processing }
              succeeded= { succeeded }
            />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home
              handleSubmit={ handleSubmit }
              client= { client }
              processing= { processing }
              succeeded= { succeeded }
            />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
