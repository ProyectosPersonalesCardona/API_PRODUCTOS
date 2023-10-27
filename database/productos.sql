-- Active: 1697481834804@@localhost@5432@tiendita

CREATE TABLE tbl_productos
(   
    id serial PRIMARY KEY,
    nombre_Producto VARCHAR(50),
    descripcion VARCHAR(100),
    precio FLOAT(10),
    Id_categoria INTEGER REFERENCES tbl_categoria(id),
    stock INTEGER
); 


SELECT * FROM tbl_productos;


INSERT INTO tbl_productos
( nombre_Producto, descripcion, precio, Id_categoria, stock )
VALUES('Refrigeradora', '6 puertas Multiusos', 45750, 1, 14);

UPDATE tbl_productos
SET nombre_Producto= 'Nevera', descripcion='4 puertas Multiusos', precio= 45750.99,Id_categoria=1, stock=15
WHERE id= 2;

DELETE FROM tbl_productos
WHERE id=1;


DROP TABLE tbl_productos CASCADE


--INNER JOINS  //llave primaria padre llave foranea de la hija
SELECT a.id, a.nombre_Producto, a.descripcion, a.precio, b.nombre_categoria, a.stock 
FROM tbl_productos a
INNER JOIN tbl_categoria b
on b.id =a.Id_categoria;
