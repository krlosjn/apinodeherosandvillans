const { ObjectId } = require('bson');
const Heros=require('../models/Heros');


module.exports={
    getHeros: async (req,res)=>{
        const users= await Heros.find({});
        try{
            res.status(200).json({
                msg:'lista de héroes',
                body:users
            })
        }catch(err){
            res.status(400).json({
                msg:'no se puede mostrar héroes'
            })
        }
        return res;
    },

    getHero: async (req,res)=>{
        const {params:{id}}=req;
        const user= await Heros.findOne({_id:ObjectId(id)});
        try{
            res.status(201).json({
                msg:'Héroe encontrado',
                body:user
            })
        }catch(err){
            res.json({
                msg:'No se pudo encontrar el héroe'
            })
        }
        return res;
    },
    createHero: async (req,res)=>{
        const {body:newUser}=req;
        const userNew= new Heros(newUser);
        try{
            const resultUser=await userNew.save();
            res.status(201).json({
                msg:'Héroe creado',
                body:resultUser
            });
        }catch(err){
            res.json({
                msg:'No se pudo crear el héroe'
            })

        }
        return res
    }
}