//requerido para la conexion de la BD
const db=require('../database/conn');

const getClientes= async(req,res)=>{

    //query que le pedimos a la BD
    const querySQL= `SELECT * FROM tbl_clientes`;

   //variable para que espere la conexion a la BD y realice la query que pedimos
   const resultado= await db.query(querySQL,params);

   if(resultado.length>0){
       //resultado que queremos nos devuelva y en que formato
      res.json(resultado);
  }else{
      res.status(404).json(resultado);
  }
};




const getIdClientes= async(req, res)=>{

    //parametros que nos envia el frontEnd
    const params=[
        req.params.id
    ];

    //query que le pedimos a la BD
    const querySQL= `SELECT * FROM tbl_clientes WHERE id=$1`

    //variable para que espere la conexion a la BD y realice la query que pedimos
    const resultado= await db.query(querySQL,params);
    if(resultado.length>0){
        //resultado que queremos nos devuelva y en que formato
        res.json(resultado);
    }else{
        res.status(404).json(resultado);
    }
};




const postClientes= async(req,res)=>{

    //parametros que nos envia el frontEnd
    const params=[
        req.body.nombre,
        req.body.apellido,
        req.body.correo_Electronico,
        req.body.telefono
    ];

    //query que le pedimos a la BD
    const querySQL=`INSERT INTO tbl_clientes
    ( nombre, apellido, correo_Electronico, telefono)
    VALUES($1, $2, $3, $4) retuning *`;

    
    try{
        //variable para que espere la conexion a la BD y realice la query que pedimos
        const resultado =await db.query(querySQL, params);

        //resultado que queremos nos devuelva y en que formato
        res.json(resultado);

    }catch(e){
        res.status(500).json(e);
    }
};




const putClientes= async(req,res)=>{

    //parametros que nos envia el frontEnd
    const params=[
        req.body.nombre,
        req.body.apellido,
        req.body.correo_Electronico,
        req.body.telefono,
        req.params.id
    ];

    //query que le pedimos a la BD
    const querySQL= `UPDATE tbl_clientes
    SET nombre= $1, apellido=$2, correo_Electronico= $3,telefono=$4
    WHERE id= $5  returning *`;

    
    try{
        //variable para que espere la conexion a la BD y realice la query que pedimos
        const resultado =await db.query(querySQL, params);

        //resultado que queremos nos devuelva y en que formato
        res.json(resultado);

    }catch(e){
        res.status(500).json(e);
    }
};




const deleteCliente=async(req, res)=>{

    //parametros que nos envia el frontEnd
    const params=[
        req.params.id
    ];

    //query que le pedimos a la BD
    const querySQL= `DELETE FROM tbl_clientes
    WHERE id=$1;`;
    
    try{
        //variable para que espere la conexion a la BD y realice la query que pedimos
        const resultado =await db.query(querySQL, params);

        //resultado que queremos nos devuelva y en que formato
        res.json(resultado);

    }catch(e){
        res.status(500).json(e);
    }
};


module.exports={
    getClientes, getIdClientes, postClientes, putClientes, deleteCliente
};