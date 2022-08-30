import React from "react"
import Logo from '../Logos/Logo_png.webp'
import './css/LoadingScreen.css'

const LoadingScreen = () => {
  return(
   <div className="loading">
     <img src={ Logo } alt="Tuhogar_Logo" />
     <h1>Cargando...</h1>
   </div>
  )
}

export default LoadingScreen
