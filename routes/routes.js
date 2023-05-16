import express from 'express'

import { signin, signup, home, simulInicio, simulCerrar, createUser } from '../controllers/login.js'

const rutas = express.Router()

rutas.get('/', home)
rutas.get('/signin', signin)
rutas.get('/signup', signup)
rutas.get('/iniSimulacion', simulInicio)
rutas.get('/cerrarSesion', simulCerrar)
rutas.post('/signup', createUser)


export default rutas