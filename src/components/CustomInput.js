import React from 'react'
import './css/CustomInput.css'

const CustomInput = ({ input, meta, ...props }) => {

  return (
    <div className="custominput">
      <input { ...input } { ...props }  />
      { meta.submitFailed && meta.error && <p>{ meta.error }</p> }
    </div>
  )
}

export default CustomInput
