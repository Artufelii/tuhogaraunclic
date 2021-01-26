import React from 'react'
import { reduxForm, Field } from "redux-form";
import './css/ContactForm.css'

const validate = (values) => {
  const errors = {}

  if(!values.name) {
    errors.name = '*Por favor coloca tu nombre, no debe contener caracteres especiales' 
  } 

  if (!values.email) {
    errors.email = '*Por favor coloca un email valido' 
  }

  if (!values.phone) {
    errors.phone = '*Por favor coloca tu telefono, debe ser de 10 dígitos' 
  }

  if (!values.message) {
    errors.message = '*Por favor Escribe un mensaje' 
  }

  return errors

}

function ContactForm(props) {

  const { handleSubmit } = props
  
  console.log(props)

  return (
    <form onSubmit={ handleSubmit } className="contact__form">
      <h2>¡Tu opinion es importante para nosotros!</h2>
      <h5>Nombre:</h5>
      <Field name="name" component="input" placeholder="Nombre" />
      <h5>Correo:</h5>
      <Field name="email" component="input" placeholder="Correo" />
      <h5>Teléfono:</h5>
      <Field name="phone" component="input" placeholder="Telefóno" />
      <h5>Mensaje:</h5>
      <Field name="message" component='textarea' placeholder="Mensaje" />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default reduxForm({
  form: 'contact',
  validate,
})(ContactForm)
