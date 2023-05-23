DROP database if exists empresa;
CREATE database empresa;
USE empresa;

CREATE TABLE usuarios (ident VARCHAR(50), nombre VARCHAR(50), correo VARCHAR(50), contrasena VARCHAR(128));

INSERT INTO usuarios (ident, nombre, correo, contrasena) VALUES
    ('admin', 'Oscar', 'oscar@aragon.mx', '42d0ea697109af4149b88017f59e2d11309cb80f4a98bc7b848349c13e962fcc83aae6e0e467bc7d7d48c640251291f7136e18c8d4750f5df60255b6a964961c'), /*secreto123*/
    ('admin', 'Ariok', 'ariok@aragon.mx', '9517739e49de0a507feaf764331c616eafc8d6a6967ec0fadd20bf35adb3d5daadb348a27f6ab7f8ad3ba2ea5de66e37f9cc031cd83b94c2e231c0b894234677'),/*contrasena123*/
    ('admin', 'Josseline', 'josseline@aragon.mx', 'ac6aa533936ec8a8edc187cc6ce4b5a91cf8b716ceef5a40c2e17a5c88584343a9dbd3e0d9d9385071acd1ef20bda5cb418e6d96355b120a7637eb2ca9f4c2c9'),/*clave123*/
    ('admin', 'Alonso', 'alonso@aragon.mx', '4ced37ee88093a241d33ba13e648ab1a828c86eaa357241b3c7e70b4da50e517033fcf8de1ce7bc4ba65527bf3c5e90f85dee02465316d3191925e97d70983ce'),/*clave456*/
    ('admin', 'Uriel', 'uriel@aragon.mx', '69769973741656ef94f2905ac0b0288b9cc9eea2a4c3e0a766e9f10b6c5abb756fb70edf19167b273e14190dfc1b27c58f512f9ab3e0508d52628226696ff0d5'),/*clave789*/
	('user', 'Fernando', 'fernando@aragon.mx', '8bf8251df16abd7634cb4d96c9ab5811ca7173677d08cc6542c2607dbdd7608fa213022fa2afa74ed58a7ba21ec7465060d9158999dabb994b38d7f1c9848654')/*secreto456*/
    ;
select * from usuarios;