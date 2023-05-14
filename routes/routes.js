import express from 'express'

import { signin, signup, home, simulInicio, simulCerrar } from '../controllers/login.js'

const rutas = express.Router()

rutas.get('/', home)
rutas.get('/signin', signin)
rutas.get('/signup', signup)
rutas.get('/iniSimulacion', simulInicio)
rutas.get('/cerrarSesion', simulCerrar)


export default rutas