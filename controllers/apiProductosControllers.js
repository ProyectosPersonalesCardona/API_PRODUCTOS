//requerido para la conexion de la BD
const db= require('../database/conn');

const getProductos= async(req, res)=>{

    //query que le pedimos a la BD
    const querySQL= `SELECT * FROM tbl_productos;`;

     //variable para que espere la conexion a la BD y realice la query que pedimos
     const resultado= await db.query(querySQL);
     if(resultado.length>0){
          //resultado que queremos nos devuelva y en que formato
         res.json(resultado);
     }else{
         res.status(404).json(resultado);
     }
};




const getIdProducto= async(req,res)=>{

    //parametros que nos envia el frontEnd
    const params=[
        req.params.id
    ];

    //query que le pedimos a la BD
    const querySQL= `SELECT * FROM tbl_productos WHERE ID=$1`;

    //variable para que espere la conexion a la BD y realice la query que pedimos
    const resultado= await db.query(querySQL,params);
    if(resultado.length>0){
        //resultado que queremos nos devuelva y en que formato
       res.json(resultado);
   }else{
       res.status(404).json(resultado);
   }
}




const postProducto= async(req, res)=>{

    //parametros que nos envia el frontEnd
    const params=[
        req.body.nombre_Producto,
        req.body.descripcion,
        req.body.precio,
        req.body.Id_categoria,
        req.body.Stock
    ]

    //query que le pedimos a la BD
    querySQL= `INSERT INTO tbl_productos
    ( nombre_Producto, descripcion, precio, Id_categoria, stock )
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




const putProducto= async(req, res)=>{

    //parametros que nos envia el frontEnd
    const params=[
        req.body.nombre_Producto,
        req.body.descripcion,
        req.body.precio,
        req.body.Id_categoria,
        req.body.stock,
        req.params.id
    ];

    //query que le pedimos a la BD
    const querySQL=`UPDATE tbl_productos
    SET nombre_Producto= $1, descripcion=$2, precio= $3,Id_categoria=$4, stock=$5
    WHERE id= $6; returning *`;

    try{
        //variable para que espere la conexion a la BD y realice la query que pedimos
        const resultado =await db.query(querySQL, params);

        //resultado que queremos nos devuelva y en que formato
        res.json(resultado);

    }catch(e){
        res.status(500).json(e);
    }
    
}




const deleteProducto= async(req,res)=>{
 
    //parametros que nos envia el frontEnd
    const params=[
        req.params.id
    ];

    //query que le pedimos a la BD
    const querySQL= `DELETE FROM tbl_productos WHERE id=$1;`;

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
    getProductos, getIdProducto, postProducto, putProducto, deleteProducto
};



