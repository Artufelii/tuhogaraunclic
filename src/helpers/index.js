import axios from './axios'

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
  console.log(payload)
  const { name, email, phone, message } = payload

  const response = await axios({
    method: 'POST',
    url: '/send-message',
    data: {
      name,
      email,
      phone,
      message,
    }
  })

  return response
} 

export const getLocation = async (adress) => {

  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=${apiKey}&address=${adress}`)

  return response
}
