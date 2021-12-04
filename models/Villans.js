const {Schema,model}=require('mongoose');

const villanSchema=Schema({
    nombre:{
        type:String,
        required:true
    },
    afiliacion:{
        type:String,
        required:false
    },
    crimenes:{
        type:String,
        required:false
    }
})

module.exports=model('villano',villanSchema);