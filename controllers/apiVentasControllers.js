//requerido para la conexion de la BD
const db= require('../database/conn');

const getVentas= async(req, res)=>{

    //query que le pedimos a la BD
    const querySQL= `SELECT * FROM tbl_ventas`;

     //variable para que espere la conexion a la BD y realice la query que pedimos
     const resultado= await db.query(querySQL);
     if(resultado.length>0){
          //resultado que queremos nos devuelva y en que formato
         res.json(resultado);
     }else{
         res.status(404).json(resultado);
     }
};




const getIdVenta= async(req,res)=>{

    //parametros que nos envia el frontEnd
    const params=[
        req.params.id
    ];

    //query que le pedimos a la BD
    const querySQL= `SELECT * FROM tbl_ventas WHERE id=$1`;

    //variable para que espere la conexion a la BD y realice la query que pedimos
    const resultado= await db.query(querySQL,params);
    if(resultado.length>0){
        //resultado que queremos nos devuelva y en que formato
       res.json(resultado);
   }else{
       res.status(404).json(resultado);
   }
}




const postVenta= async(req, res)=>{

    //parametros que nos envia el frontEnd
    const params=[
        req.body.id_producto,
        req.body.id_categoria,
        req.body.id_cliente,
        req.body.cantidad,
        req.body.fecha_venta
    ]

    //query que le pedimos a la BD
    querySQL= `INSERT INTO tbl_ventas
    ( id_producto, id_categoria, id_cliente, cantidad, fecha_venta )
    VALUES($1, $2, $3, $4, $5) returning *`;

    try{
        //variable para que espere la conexion a la BD y realice la query que pedimos
        const resultado =await db.query(querySQL, params);

        //resultado que queremos nos devuelva y en que formato
        res.json(resultado);

    }catch(e){
        res.status(500).json(e);
    }
}




const putVenta= async(req, res)=>{

    //parametros que nos envia el frontEnd
    const params=[
        req.body.id_producto,
        req.body.id_categoria,
        req.body.id_cliente,
        req.body.cantidad,
        req.body.fecha_venta,
        req.params.id
    ];

    //query que le pedimos a la BD
    const querySQL=`UPDATE tbl_ventas SET id_producto= $1, id_categoria=$2, id_cliente= $3, cantidad=$4, fecha_venta=$5 WHERE id= $6 returning *`;

    try{
        //variable para que espere la conexion a la BD y realice la query que pedimos
        const resultado =await db.query(querySQL, params);

        //resultado que queremos nos devuelva y en que formato
        res.json(resultado);

    }catch(e){
        res.status(500).json(e);
    }
    
}




const deleteVenta= async(req,res)=>{
 
    //parametros que nos envia el frontEnd
    const params=[
        req.params.id
    ];

    //query que le pedimos a la BD
    const querySQL= `DELETE FROM tbl_ventas WHERE id=$1;`;

    try{
        //variable para que espere la conexion a la BD y realice la query que pedimos
        const resultado =await db.query(querySQL, params);

        //resultado que queremos nos devuelva y en que formato
        res.json(resultado);

    }catch(e){
        res.status(500).json(e);
    }
};



//exportamos los metodos para que los use routes/apiCategoria
module.exports={
    getVentas, getIdVenta, postVenta, putVenta, deleteVenta
};