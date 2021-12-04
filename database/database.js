const mongoose=require('mongoose');
const db=require('../config/config');

const dataBD= async ()=>{
    let resultDB=null;
    try{
        resultDB= await mongoose.connect(db.dataBase);
        console.log("conexión exitosa");
    }catch(err){
        console.log('error conectando la base de datos');
    }
    return resultDB;
}

module.exports=dataBD;