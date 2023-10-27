//requerido para la conexion de la BD
const db= require ('../database/conn');


const getCategoria= async (req, res)=>{
    
    //query que le pedimos a la BD
    const querySQL= `SELECT * FROM tbl_categoria`;

    //variable para que espere la conexion a la BD y realice la query que pedimos
    const resultado= await db.query(querySQL);
    if(resultado.length>0){
         //resultado que queremos nos devuelva y en que formato
        res.json(resultado);
    }else{
        res.status(404).json(resultado);
    }   
};



const getIdCategoria= async(req,res)=>{

    //parametros que nos envia el frontEnd
    const params=[
        req.params.id
    ];

    //query que le pedimos a la BD
    const querySQL= `SELECT * FROM tbl_categoria WHERE ID=$1`;

    //variable para que espere la conexion a la BD y realice la query que pedimos
    const resultado= await db.query(querySQL,params);
    if(resultado.length>0){
        //resultado que queremos nos devuelva y en que formato
       res.json(resultado);
   }else{
       res.status(404).json(resultado);
   }
}




const postCategoria= async(req, res)=>{

    //parametros que nos envia el frontEnd
    const params=[
        req.body.nombre_categoria
    ]

    //query que le pedimos a la BD
    querySQL= `INSERT INTO tbl_categoria ( nombre_categoria) VALUES ($1) returning *`;

    try{
        //variable para que espere la conexion a la BD y realice la query que pedimos
        const resultado =await db.query(querySQL, params);

        //resultado que queremos nos devuelva y en que formato
        res.json(resultado);

    }catch(e){
        res.status(500).json(e);
    }
}




const putCategoria= async(req, res)=>{

    //parametros que nos envia el frontEnd
    const params=[
        req.body.nombre_categoria,
        req.params.id
    ]

    //query que le pedimos a la BD
    const querySQL=`UPDATE tbl_categoria SET nombre_categoria= $1 WHERE id= $2 returning *`;

    try{
        //variable para que espere la conexion a la BD y realice la query que pedimos
        const resultado =await db.query(querySQL, params);

        //resultado que queremos nos devuelva y en que formato
        res.json(resultado);

    }catch(e){
        res.status(500).json(e);
    }
    
}




const deleteCategoria= async(req,res)=>{
 
    //parametros que nos envia el frontEnd
    const params=[
        req.params.id
    ];

    //query que le pedimos a la BD
    const querySQL= `DELETE FROM tbl_categoria WHERE id=$1;`;

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
    getCategoria, getIdCategoria, postCategoria, putCategoria, deleteCategoria
};