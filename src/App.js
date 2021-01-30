import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Propiedades from './components/Propiedades'
import Contacto from './components/Contacto'
import Servicios from './components/Servicios'
import Blog from './components/Blog'

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
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
            <Contacto />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
