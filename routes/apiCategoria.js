//asignamos una variable de la libreria de express
const express= require ('express');

// traemos los metodos del controlador
const { getCategoria, getIdCategoria, postCategoria, putCategoria, deleteCategoria}=require ('../controllers/apiCategoriasControllers');


//variable para de enlace
const apiCategoria= express();

//metodo Get
apiCategoria.get('',getCategoria);

//metodo Get por Id
apiCategoria.get('/:id',getIdCategoria);

//metodo post
apiCategoria.post('',postCategoria);

//metodo put
apiCategoria.put('/:id',putCategoria);

//metodo delete
apiCategoria.delete('/:id',deleteCategoria);

//exportamos para que le sirva a otros archivos
module.exports=apiCategoria;