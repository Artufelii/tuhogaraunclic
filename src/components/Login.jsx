import React, {useState} from "react"
import LoginForm from './LoginForm'
import axios from './axios'
import {useHistory} from "react-router-dom"

const styles = {
  container: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}


function Login(){

  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  
  const handleSubmit = async (payload) => {
    const { email, password } = payload
    setLoading(true)
    const response = await axios({
      method: 'POST',
      url: '/login',
      data: {
        email,
        password
      }
    })

    if (response.data.token) {
      localStorage.setItem('token', response.data.token)
      history.push("/dashboard/desk")
    } else {
      setError(response.data.error)
    }

    setLoading(false)
  }

  return(
    <div style={styles.container}>
      <LoginForm
        loading={loading}
        errorLogin={error}
        onSubmit={handleSubmit}
      />
    </div>
    )
}

export default Login
