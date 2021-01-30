import React from 'react'
import './css/CustomInput.css'

const CustomInput = ({ input, type, placeholder, meta: { touched, error }  }) => {
  return (
    <div className="custominput">
      <input {...input}  type={type} placeholder={placeholder} />
      { touched && error && <p>{ error }</p> }
    </div>
  )
}

export default CustomInput
