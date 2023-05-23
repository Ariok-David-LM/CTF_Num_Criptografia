DROP database if exists empresa;
CREATE database empresa;
USE empresa;

CREATE TABLE usuarios (ident VARCHAR(50), nombre VARCHAR(50), correo VARCHAR(50), contrasena VARCHAR(128));

INSERT INTO usuarios (ident, nombre, correo, contrasena) VALUES
    ('admin', 'Oscar', 'oscar@aragon.mx', '0f91779b11baffc0f6606b9e8c7c864b'),/*sternocleidomastoidian*/
    ('user', 'Ariok', 'ariok@aragon.mx', '2eeba0a2ac3ea034f0d770adcaa6b1e9'),/*p0987654321*/
    ('user', 'Josseline', 'josseline@aragon.mx', 'de96a977e9228d02d6076d420651f068'),/*orangerange*/
    ('user', 'Alonso', 'alonso@aragon.mx', '43cc5c5f178a308b80a5885c3d4bcf7a'),/*hppavilionmx704*/
    ('user', 'Uriel', 'uriel@aragon.mx', 'f53fc4b68b3ea643934833fb11b97527'),/*unicoporsiempre*/
	('user', 'Fernando', 'fernando@aragon.mx', 'f53fc4b68b3ea643934833fb11b97527')/*underoathrocks*/
    ;
select * from usuarios;