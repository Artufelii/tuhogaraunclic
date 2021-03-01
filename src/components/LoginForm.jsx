import React from "react"
import { Field, reduxForm } from "redux-form"
import CustomInput from './CustomInput'

const styles = {
  form: {
    width: '300px',
    height: '400px',
    padding: '20px',
    backgroundColor: '#fefefe',
    borderRadius: '5px',
    boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.5)',
  },

  input: {
    borderBottom: '1px solid #eee'
  },

  label: {
    marginTop: '15px',
    marginRight: 'auto'
  },

  title: {
    margin: '20px 0'
  },
  
  container: {
    width: '100%',
    textAlign: 'center'
  },

  button: {
    width: '100%',
    margin: '40px 0 20px 0',
    padding: '20px',
    backgroundColor: '#bd1b3c', 
    color: '#fefefe',
    fontWeight: '800',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    outline: 'none'
  },
  
  error: {
    color: 'red',
    textAlign: 'center'
  }

}

function LoginForm({ handleSubmit, loading, errorLogin }){
  return(
    <form onSubmit={ handleSubmit } style={styles.form}>
      <div style={styles.container}>
        <h3 style={styles.title}>¡Bienvenido Administrador!</h3>
        <h3 style={styles.title}>Sign In</h3>
      </div>
      <h5 style={styles.label}>Email:</h5>
      <Field style={styles.input} name="email" type="email" placeholder='email' component={CustomInput}/>
      <h5 style={styles.label}>Password:</h5>
      <Field style={styles.input} name="password" type="password" placeholder='password' component={CustomInput}/>
      <button style={styles.button} type='submit'>{ loading ? 'Enviando...' : 'Sign In' }</button>
      <div style={styles.error}>
        { errorLogin !== "" && <p>{errorLogin}</p> }
      </div>
    </form>
    )
}

export default reduxForm({
  form: 'login'
})(LoginForm) 
