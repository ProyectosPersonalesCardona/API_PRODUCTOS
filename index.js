//asignamos una variable de la libreria de express
const express = require ('express');

//importamos nuestros archivos de routes
const apiCategoria=require('./routes/apiCategoria');
const apiClientes=require('./routes/apiClientes');
const apiProductos = require('./routes/apiProductos');
const apiVentas = require('./routes/apiVentas');



//variable para de enlace
const app= express();

//middleware= conexion previa al endpoint
app.use(express.json());

//rutas para trabajar con la api
app.use('/Categorias/',apiCategoria);

app.use('/Clientes/',apiClientes);

app.use('/Productos/',apiProductos)

app.use('/Ventas/',apiVentas)

//puerto que se comunica el frontEnd
app.listen(3000);