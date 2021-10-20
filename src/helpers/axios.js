import axios from 'axios'

const url = 'https://tuhogaraunclic.herokuapp.com/'


const instance = axios.create({
  baseURL: url
})

export default instance
