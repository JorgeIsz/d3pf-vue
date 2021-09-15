import { post } from 'axios'

// Cogemos los datos de nuestra cuenta de Blizzard
// 🔥 Recuerda que debes usar tus datos a la hora de hacer las llamadas a las APIs
// 🔥 Como dice la documentación, tienes un máximo de llamadas por segundo y por hora a la API.
// 🔥 Estos datos deberían ser privados
const clientId = '873b626e4ef343698d7195e949312a26'
const clientSecret = 'FmS8SG5eGsq4Gx4s0eeMHenZLBDsciFP'

// API URL para hacer oauth
const region = 'eu'
const API_URL = `https://${region}.battle.net/oauth/token`

export const getToken = () => {
  const body = new FormData()
  body.append('grant_type', 'client_credentials')

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    auth: {
      username: clientId,
      password: clientSecret
    }
  }

  return post(API_URL, body, config)
}
