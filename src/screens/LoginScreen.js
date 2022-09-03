import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { logIn } from '../helpers'
import Logo from '../Logos/Logo_png.webp'
import './css/LoginScreen.css'

const LoginSreen = () => {
  const history = useHistory()
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false)
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  })

  const handleChange = ({ target: { name, value } }) => {
    setCredentials({ ...credentials, [name]: value })
  } 

  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault()
    logIn(credentials)
      .then(({ data }) => {
        if (!data.error) {
          sessionStorage.setItem('token', data.token)
          history.push('/admin/dashboard')
        }
        setError(data.error)
        setLoading(false)
      })
  }
  
  return(
    <div className="form__container">
      <h1>Sistema de Administración</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__image">
          <img src={Logo} alt="Tu Hogar a Un Clic" />
        </div>
        <input type="text" name="username" placeholder="Usuario" onChange={handleChange} />
        <input type="password" name="password" placeholder="Contraseña" onChange={handleChange}/>
        <button type="submit" className={loading ? 'button_inactive' : 'button_active'}>{loading ? '...cargando' : 'Log In'}</button>
        {error !== '' 
          ? <p>{ error }</p>
          : <p></p>
        }
      </form>
    </div>
  )
}
export default LoginSreen
