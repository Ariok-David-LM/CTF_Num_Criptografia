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
    return  {id:'admin', nombre:'Oscar', correo:'oscar@example.com', contrasena:'42d0ea697109af4149b88017f59e2d11309cb80f4a98bc7b848349c13e962fcc83aae6e0e467bc7d7d48c640251291f7136e18c8d4750f5df60255b6a964961c'}
  }
}
export default Usuarios