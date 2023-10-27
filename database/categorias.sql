-- Active: 1697481834804@@localhost@5432@tiendita

CREATE TABLE tbl_categoria
(
    id SERIAL PRIMARY KEY,
    nombre_categoria VARCHAR(50)
);


SELECT * FROM tbl_categoria;


INSERT INTO tbl_categoria
( nombre_categoria)
VALUES('Linea Blanca');

UPDATE tbl_categoria
SET nombre_categoria= 'Linea Blanca'
WHERE id= 1;

DELETE FROM tbl_categoria
WHERE id=1;


DROP TABLE tbl_categoria CASCADE