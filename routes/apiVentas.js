//asignamos una variable de la libreria de express
const express= require('express');

// traemos los metodos del controlador
const { getVentas, getIdVenta, postVenta, putVenta, deleteVenta}= require('../controllers/apiVentasControllers');



//variable para de enlace
const apiVentas= express();


//metodo Get
apiVentas.get('',getVentas);

//metodo Get por Id
apiVentas.get('/:id',getIdVenta);

//metodo post
apiVentas.post('',postVenta);

//metodo put
apiVentas.put('/:id',putVenta);

//metodo delete
apiVentas.delete('/:id',deleteVenta);

//exportamos para que le sirva a otros archivos
module.exports=apiVentas;