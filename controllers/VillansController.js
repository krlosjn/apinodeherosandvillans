const Villans= require('../models/Villans');

module.exports={

    getVillans:async (req,res)=>{
        try{
            const allVillans =  await Villans.find({});
            res.status(200).json({
                msg:'lista de villanos',
                body:allVillans
            });
        
        }catch(err){
            res.status(200).json({
                msg:'No se encontraron villanos'
            });
        }
        return res;
    }
    ,getVillan: async (req,res)=>{
        try{
            const {params:{id}}=req;
            const findVillan= await Villans.findOne({_id:Object(id)});
            res.status(200).json({
                msg:'villano encontrado',
                body:findVillan
            })
        }catch(err){
            res.status(200).json({
                msg:'villano no  encontrado',
            })
        }
        return res;
    },
    createVillan: async(req,res)=>{
        try{
            const {body:newVillan}=req
            const villanNew= new Villans(newVillan);
            const villan= await villanNew.save();

            res.status(201).json({
                msg:'Villano creado',
                body:villan
            });

        }catch(err){
            res.status(201).json({
                msg:'Villano no creado',
            });
        }
        return res;
    }
}