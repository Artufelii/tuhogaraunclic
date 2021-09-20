import React, { useEffect } from 'react'
import { reduxForm, Field, reset } from "redux-form";
import CustomInput from './CustomInput'
import './css/ContactForm.css'

const validate = values => {
  const errors = {}

  if(!values.name) {
    errors.name = '*Por favor coloca tu nombre, no debe contener caracteres especiales' 
  } 

  if (!values.email) {
    errors.email = '*Por favor coloca un email' 
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = '*Por favor ingresa un email valido'
  }

  if (!values.phone) {
    errors.phone = '*Por favor coloca tu telefono, debe ser de 10 dígitos' 
  }

  return errors

}


const ContactForm = props => {

  const { handleSubmit, client, processing, succeeded,  dispatch, form, title='¡Tu opinion es importante para nosotros!' } = props

  useEffect(() => {
    if (succeeded) {
      dispatch(reset(form))
    }
  })


  return (
    <form id="contact" onSubmit={ handleSubmit } className="contact__form">
      <h2>{client !== '' ? `¡Gracias por tu mensaje ${client}!` : title }</h2>
      <h5>Nombre:</h5>
      <Field name="name" component={CustomInput} placeholder="Nombre" type="text" />
      <h5>Correo:</h5>
      <Field name="email" component={CustomInput} placeholder="Correo" type="email" />
      <h5>Teléfono:</h5>
      <Field name="phone" component={CustomInput} placeholder="Telefóno" type="text" />
      <h5>Mensaje:</h5>
      <Field name="message" component='textarea' placeholder="Cuentanos sobre ti, lo que te gusta o sobre la casa de tus sueños" />
      <button className={ succeeded ? 'button__disabled' : 'button' } type="submit" disabled= { succeeded } >
        {processing ? "Enviando..." : "Enviar"}
      </button>
    </form>
  )
}

export default reduxForm({
  validate,
  form: 'contact',
})(ContactForm)
