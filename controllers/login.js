//Pagina Inicio
const home = async (req, res) => {
  if (req.session.user && req.session.in) {
    res.render('home')
  } else {
    res.redirect('/signin')
  }
}

//Sign In
const signin = async (req, res) => {
  if (req.session.user && req.session.in) {
    res.redirect('/signin')
  } else {
    res.render('signin')
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