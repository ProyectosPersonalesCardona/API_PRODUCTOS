-- Active: 1697481834804@@localhost@5432@tiendita
CREATE TABLE tbl_clientes
(   
    id serial PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    correo_Electronico VARCHAR(100),
    telefono VARCHAR(20)
); 



SELECT * FROM tbl_clientes;


INSERT INTO tbl_clientes
( nombre, apellido, correo_Electronico, telefono)
VALUES('Luis', 'Cardona', 'kikecar97@gmail.com', '3348-1474');

UPDATE tbl_clientes
SET nombre= 'Luis', apellido='Cardona', correo_Electronico= 'kikecar97@gmail.com',telefono='3348-1475'
WHERE id= 1;

DELETE FROM tbl_clientes
WHERE id=1;


DROP TABLE tbl_clientes CASCADE