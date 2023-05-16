DROP database if exists empresa;
CREATE database empresa;
USE empresa;

CREATE TABLE usuarios (id VARCHAR(50), nombre VARCHAR(50), correo VARCHAR(50), contrasena VARCHAR(50));

INSERT INTO usuarios (id, nombre, correo, contrasena) VALUES
    ('admin', 'Oscar', 'oscar@example.com', 'secreto123'),
    ('admin', 'Ariok', 'ariok@example.com', 'contrasena123'),
    ('admin', 'Josseline', 'josseline@example.com', 'clave123'),
    ('admin', 'Alonso', 'alonso@example.com', 'clave456'),
    ('admin', 'Uriel', 'uriel@example.com', 'clave789'),
	('user', 'Fernando', 'fernando@example.com', 'secreto456')
    ;
select * from usuarios;