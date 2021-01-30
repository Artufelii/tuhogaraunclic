import React, { useState } from 'react'
import { reduxForm, Field, reset } from "redux-form";
import CustomInput from './CustomInput'
import axios from './axios'
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


let ContactForm = props => {

  const { handleSubmit, form, dispatch } = props

  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [ client, setClient ] = useState("")

  const onSubmit = async (values) => {

    validate(values)

    if(values) {
      setProcessing(true)
      const response = await axios({
        method: 'POST',
        url: '/send-message',
        data: {
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message
        }
      })
      setClient(response.data.newClient.name)
      setSucceeded(true)
      setProcessing(false)
      dispatch(reset(form)) 
    }
  }

  return (
    <form onSubmit={ handleSubmit(onSubmit) } className="contact__form">
      <h2>{client !== '' ? `¡Gracias por tu mensaje ${client}!` : '¡Tu opinion es importante para nosotros!'}</h2>
      <h5>Nombre:</h5>
      <Field name="name" component={CustomInput} placeholder="Nombre" type="text" />
      <h5>Correo:</h5>
      <Field name="email" component={CustomInput} placeholder="Correo" type="email" />
      <h5>Teléfono:</h5>
      <Field name="phone" component={CustomInput} placeholder="Telefóno" type="text" />
      <h5>Mensaje:</h5>
      <Field name="message" component='textarea' placeholder="Mensaje" />
      <button type="submit" disbaled={ processing || succeeded ? 'true' : 'false'}>
        { processing ? "Enviando..." : "Enviar" }
      </button>
    </form>
  )
}

export default reduxForm({
  form: 'contactForm',
  validate: validate,
})(ContactForm)
