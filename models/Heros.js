const {Schema,model}=require('mongoose');

const heroeSchema=Schema({
    nombre:{
        type:String,
        required:true
    },
    afiliacion:{
        type:String,
        required:false
    },
    poderes:{
        poderes:String,
        required:false
    }
})
module.exports=model('Heroe',heroeSchema);