import axios from './axios'

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
