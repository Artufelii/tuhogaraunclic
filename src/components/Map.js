import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '100%'
}

const apiKey = process.env.REACT_APP_API_KEY

const Map = ({ center }) => {
  return (
    <LoadScript
      googleMapsApiKey={apiKey}
    >
      <GoogleMap
        mapContainerStyle={ containerStyle }
        center={ center }
        zoom={ 15 }
      >
        <Marker position={ center } />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map) 
