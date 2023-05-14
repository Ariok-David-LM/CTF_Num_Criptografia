import express from 'express'
import rutas from './routes/routes.js'
import session from 'express-session'

const app = express()
const port = 1801

app.set('view engine', 'pug')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))

app.use(session({
  secret: 'clave1',
  resave: false,
  saveUninitialized: false
}));

app.use('/', rutas)

app.listen(port, () => {
  console.log('Servidor exitosamente iniciado en el puerto ' + port)
})
