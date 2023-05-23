import express from 'express'

import { signin, signup, home, createUser, iniSesion, closeSesion } from '../controllers/login.js'

const rutas = express.Router()

rutas.get('/', home)
rutas.get('/signin', signin)
rutas.get('/signup', signup)
rutas.get('/cerrarSesion', closeSesion)
rutas.post('/signup', createUser)
rutas.post('/signin', iniSesion)


export default rutas