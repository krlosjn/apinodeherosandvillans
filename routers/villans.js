const express=require('express');
const villasController =require('../controllers/VillansController');

const rutasVillanos=(app)=>{
    let router=express.Router();
    router.get('/',villasController.getVillans)
        .get('/:id',villasController.getVillan)
        .post('/',villasController.createVillan)
    app.use('/api/villans',router);
}
module.exports=rutasVillanos;