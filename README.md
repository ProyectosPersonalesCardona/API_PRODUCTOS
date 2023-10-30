# PROYECTO PRODUCTOS

 Este proyecto hace un api de una base de datos que contiene una tabla de categorias, productos, clientes y ventas hace las 5 basicas operaciones del CRUD y de una Api (GET, GET por Id, POST, PUT y DELETE).

## FUNCIONAMIENTO:
 Necesitará tener instalado:
 * [Visual Studio Code](https://code.visualstudio.com/download)
 * [node Js](https://nodejs.org/en/download)
 * [postgres](https://www.postgresql.org/download/)


Instalar todas las Dependecias:
```
npm i
```
## EJECUCION DEL PROYECTO
cambie las credenciales de la conexion a la base de datos de postgres por las suyas **ubique el archivo database/conn.js**

en **database/tables.sql** active la conexion y **Execute** a todas las querys para crear la tabla y y crear los primeros usuarios manualmente.

en la terminal de Visual Code ejecute:
```
npm run dev
```

## RECOMENDACION: 
Tener instalado extensiones en visual Studio Code:
* POSTMAN
* Database Client.

para las pruebas de APi y conexion a Postgres.