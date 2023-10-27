//asignamos una variable de la libreria de express
const express= require('express');

// traemos los metodos del controlador
const { getClientes, getIdClientes, postClientes, putClientes, deleteCliente}= require('../controllers/apiClientesControllers');


//variable para de enlace
const apiClientes= express();


//metodo Get
apiClientes.get('',getClientes);

//metodo Get por Id
apiClientes.get('/:id',getIdClientes);

//metodo post
apiClientes.post('',postClientes);

//metodo put
apiClientes.put('/:id',putClientes);

//metodo delete
apiClientes.delete('/:id',deleteCliente);

//exportamos para que le sirva a otros archivos
module.exports=apiClientes;