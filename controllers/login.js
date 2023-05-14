//Pagina Inicio
const home = async (req, res) => {
  if (req.session.user && req.session.in) {
    res.render('home', {flag: 'flag{dgbfggdsggfd}'})
  } else {
    res.redirect('/signin')
  }
}

//Sign In
const signin = async (req, res) => {
  if (req.session.user && req.session.in) {
    res.redirect('/signin', {noti: "error datos incorrectos"})
  } else {
    res.render('signin', {pagina: 'Sign In'})
  }
}

//Sign Up
const signup = async (req, res) => {
  if (req.session.user && req.session.in) {
    res.redirect('/')
  } else {
    res.render('signup')
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
  simulCerrar
}