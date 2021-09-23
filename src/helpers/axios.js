import axios from 'axios'

let url

if (process.env.NODE_ENV === 'production') {
  url = 'https://tuhogaraunclic.herokuapp.com/' 
} else {
  url = 'http://localhost:4000'
}

const instance = axios.create({
  baseURL: url
})

export default instance
