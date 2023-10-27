-- Active: 1697481834804@@localhost@5432@tiendita

CREATE TABLE tbl_ventas
(
    id SERIAL PRIMARY key,
    id_producto INTEGER REFERENCES tbl_productos(id),
    id_categoria INTEGER REFERENCES tbl_categoria(id),
    id_cliente INTEGER REFERENCES tbl_clientes(id),
    cantidad INTEGER,
    fecha_venta DATE
);


SELECT * FROM tbl_ventas;


INSERT INTO tbl_ventas
( id_producto, id_categoria, id_cliente, cantidad, fecha_venta)
VALUES(1, 1, 1, 2, '25-OCT-2023');

UPDATE tbl_ventas
SET id_producto= 1, id_categoria=1, id_cliente= 1,cantidad=2, fecha_venta='25-OCT-2023'
WHERE id= 1;

DELETE FROM tbl_ventas
WHERE id=1;


DROP TABLE tbl_ventas CASCADE