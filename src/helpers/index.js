import axios from './axios'
import jwt from 'jsonwebtoken'

const apiKey = process.env.REACT_APP_API_KEY

export const getInfo = async (url, slug) => {
  if (slug !== '' || slug !== undefined) {
    const response = await axios({
      method: 'GET',
      url: `/${url}/${slug}`,
    }) 
    return response
  }

  const response = await axios({
    method: 'GET',
    url: `/${url}`,
  })
  return response
}

export const sendInfo = async (payload) => {
  const response = await axios({
    method: 'POST',
    url: '/send-message',
    data: payload  
  })
  return response
} 

export const logIn = async (payload) => {
  const response = await axios({
    method: 'POST',
    url: '/login',
    data: payload
  })
  return response
}

export const validateToken = async (token) => {
  if (!token) {
    return false 
  }

  const validate = jwt.verify(token, 'superSecreta-clave')
  return validate 
}

export const concatAdress = ({ street, colony, city, state, cp }) => {
  return "".concat(street, ', ', colony, ', ', city, ', ', state, ', ', cp)
}

export const getLocation = async (adress) => {
  const adressString = concatAdress(adress)
  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=${apiKey}&address=${adressString}`)
  return response
}
