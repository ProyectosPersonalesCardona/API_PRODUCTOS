//asignamos una variable de la libreria de express
const express= require('express');

// traemos los metodos del controlador
const { getProductos, getIdProducto, postProducto, putProducto, deleteProducto}= require('../controllers/apiProductosControllers');


//variable para de enlace
const apiProductos= express();


//metodo Get
apiProductos.get('',getProductos);

//metodo Get por Id
apiProductos.get('/:id',getIdProducto);

//metodo post
apiProductos.post('',postProducto);

//metodo put
apiProductos.put('/:id',putProducto);

//metodo delete
apiProductos.delete('/:id',deleteProducto);

//exportamos para que le sirva a otros archivos
module.exports=apiProductos;