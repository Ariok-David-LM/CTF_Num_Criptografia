# CTF Enumeracion y Criptografia
En la empresa Patito se rumorea que el presidente posee códigos muy importantes para algo que desconocemos, tu objetivo sera entrar al perfil del presidente, verificar si el rumor es cierto y si es así de que códigos se tratan. <br>
### Informacion

 - No se sabe el nombre del presidente
 - Hace un año se filtro una lista de trabajadores de la empresa (puede que algunos ya no estén trabajando para la empresa) [Trabajadores](trabajadores.txt) 
 - De la lista anterior puede que este el presidente<br>
### Pistas
<details>
  <summary>Pista 1</summary>
  La estructura de los correos es nombre@organizacion.mx
</details>
<details>
  <summary>Pista 2</summary>
  Al verificar un correo intenta verificar las respuestas del servidor tal vez te encuentres con una sorpresa.
</details>

### Fuentes
Puedes consultar las siguiente paginas para saber de que va el reto:
- [Enumeración](https://ciberseguridad.com/amenzas/ataque-enumeracion/#:~:text=Un%20ataque%20de%20enumeraci%C3%B3n%20ocurre,nombres%20de%20usuario%20y%20contrase%C3%B1as.)
- [Hash](https://blog.signaturit.com/es/que-es-un-hash)<br>

## ¿Como ejecutar el reto?
1. Asegurate de tener instaladas las tecnologias:<br>
	a. [MySQL](https://www.mysql.com/downloads/)<br>
	b. [Node y npm](https://nodejs.org/en)<br>
	c. [GIT](https://git-scm.com/downloads)<br>
2. De las tecnologias anteriores conocer el puerto de escucha de MySQL asi como su usuario y contraseña.<br>
3. Clona este repositorio con el siguiente comando `git clone https://github.com/Ariok-David-LM/CTF_Num_Criptografia` <br>
4. Dentro del repositorio encontraras el directorio `/db` dentro de el encontrara el archivo `empresa.sql` el cual deberas ejecutar en MySQL, puedes apoyarte del siguiente enlace: [MySQL ejecutar script sql](https://www.librebyte.net/base-de-datos/mysql-ejecutar-script-sql/)<br>
5. Configurar la conexión a la BD, dentro del directorio `/db` encontraras el archivo `conection.js` lo abriras con un editor de textos y cambiaras el puerto, usuario y contraseña por los que tengas en MySQL como se muestra en la imagen.<br>
![](/images/img1.png)<br>
6. Ya configurado el proyecto abriras una terminal o linea de comandos en el directorio del repositorio `/CTF_Num_Criptografia` y ejecutaras el siguiente comando: `npm install`<br>
7. Ya instaladas las dependencias ejecutaras: `npm run dev` para iniciar el servidor. Si todo estuvo bien obtendras la siguiente salida:<br>
![](/images/img2.png)<br>
8. Listo a resolver el reto.<br>