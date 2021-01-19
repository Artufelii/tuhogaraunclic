import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Home from './components/Home.jsx'
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
          </Route>
          <Route path="/propiedades">
            <Header />
            <Propiedades />
          </Route>
          <Route path="/servicios">
            <Header />
            <Servicios />
          </Route>
          <Route path="/contacto">
            <Header />
            <Contacto />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
