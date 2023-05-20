const Usuarios = {
  findAll: () => {
    return registros = [
      {id:'admin', nombre:'Oscar', correo:'oscar@example.com', contrasena:'secreto123'},
      {id:'admin', nombre:'Ariok', correo:'ariok@example.com', contrasena:'contrasena123'},
      {id:'admin', nombre:'Josseline', correo:'josseline@example.com', contrasena:'clave123'},
      {id:'admin', nombre:'Alonso', correo:'alonso@example.com', constrasena:'clave456'},
      {id:'admin', nombre:'Uriel', correo:'uriel@example.com', contrasena:'clave789'},
	    {id:'user', nombre:'Fernando', correo:'fernando@example.com', contrasena:'secreto456'}
    ];
  },
  findOne: () => {
    return {id:'admin', nombre:'Oscar', correo:'oscar@example.com', contrasena:'secreto123'}
  }
}
export default Usuarios