import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const containerStyle = {
  width: '600px',
  height: '400px'
}

const Map = ({ center }) => {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCwzgJybGfUgod0bYx4U78a7ZHPIPvBSEo"
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
