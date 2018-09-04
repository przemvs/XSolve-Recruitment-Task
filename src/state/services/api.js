/* eslint-disable */
import axios from 'axios'

let baseURL = 'http://localhost:3001/'

const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default instance
