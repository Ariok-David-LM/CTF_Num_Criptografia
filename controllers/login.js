import security from "../security/hasheo.js"
import Joi from "joi"
import Usuarios from "../db/simuladorBD(temp).js"

//Pagina Inicio
const home = async (req, res) => {
  if (req.session.user) {
    let extra = {session: {user: `Hi ${req.session.user} you are USER`, bandera: `You don't have a flag.`}}
    if (req.session.bandera) {
      extra = {session: {bandera: `Your flag is: ${req.session.bandera}`, user: `Hi ${req.session.user} you are ADMIN`}}
    }
    res.render('home', extra)
  } else {
    res.redirect('/signin')
  }
}

//Sign In
const signin = async (req, res) => {
  if (req.session.user) {
    res.redirect('/signin')
  } else {
    res.render('signin')
  }
}

//Sign Up
const signup = async (req, res) => {
  if (req.session.user) {
    res.redirect('/')
  } else {
    res.render('signup')
  }
}

const createUser = async (req, res) => {
  const errores = []
  //verificamos que los datos esten bien
  const datos = Joi.object({
    nombre: Joi.string().required(),
    correo: Joi.string().email({ tlds: { allow: false } }).regex(/^[a-zA-Z0-9._%+-]+@aragon\.mx$/).required() ,
    pass: Joi.string().required()
  })
  try {
    const datosC = await datos.validateAsync(req.body)
  } catch (error) {
    if (error.details[0].type === 'string.empty') {
      errores.push({mensaje: "Some fields are empty"})
    } else if (error.details[0].type === 'any.custom' || error.details[0].type === 'string.pattern.base') {
      errores.push({mensaje: "The email doesn´t have the aragon.mx domain"})
    }
  }
  //Validamos que el correo exista en la BD
  const existe = Usuarios.findOne()
  if (existe !== null) {
    errores.push({mensaje: 'Email already exists'})
    res.set('Content-Type', 'text/html')
    res.set('email-data', JSON.stringify(existe))
  }
  const id = 'user'
  const {nombre, correo, pass} = req.body
  const password = security.hash(pass)
  //Si todo esta bien creamos el usuario
  if (errores.length === 0) {
    /*
    try {
      const usuario = await Usuarios.create({
        id,
        nombre,
        correo,
        password
      }, { fields: ['id', 'nombre', 'correo', 'contrasena'] })
      res.render('signin', {sesion: 'Account created, Sign in'})
    } catch (error) {
      res.render('signup', {mensaje: 'A error has ocurred'})
      console.log(error)
    }*/
    res.render('signin', {sesion: 'Account created, Sign in'})
  } else {
    res.render('signup', {nombre, correo, pass, errores})
  }
}

const iniSesion  = async (req, res) => {
  const errors = []
   //verificamos que los datos esten bien
  const dates = Joi.object({
    nombre: Joi.string().email({ tlds: { allow: false } }).regex(/^[a-zA-Z0-9._%+-]+@aragon\.mx$/).required() ,
    pass: Joi.string().required()
  })
  try {
    const datesC = await dates.validateAsync(req.body)
  } catch (error) {
    if (error.details[0].type === 'string.empty') {
      errors.push({mensaje: "Some fields are empty"})
    } else if (error.details[0].type === 'any.custom' || error.details[0].type === 'string.pattern.base') {
      errors.push({mensaje: "The email doesn´t have the aragon.mx domain"})
    }
  }
  //vemos los usuarios en nuestra base de datos
  const exist = Usuarios.findOne()
  if (exist !== null) {
    if (security.verificar(req.body.pass, exist.contrasena)) {
      req.session.user = exist.nombre
      if (exist.id === 'admin') {
        req.session.bandera = security.bandera()
      }
    } else {
      errors.push({mensaje: 'Incorrect username or password'})
    }
  } else {
    errors.push({mensaje: 'Incorrect username or password'})
  }
  if (errors.length === 0) {
    res.redirect('/')
  } else {
    const {nombre, pass} = req.body
    res.render('signin', {nombre, pass, errors})
  }
}

//Simulacion Inicio de sesion
const simulInicio = async (req, res) => {
  req.session.user = "User1"
  req.session.in = "true"
  res.redirect('/')
}

const simulCerrar = async (req, res) => {
  req.session.destroy()
  res.redirect('/')
}

export {
  home,
  signin,
  signup,
  simulInicio,
  simulCerrar,
  createUser,
  iniSesion
}