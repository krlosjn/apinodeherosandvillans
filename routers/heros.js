const express=require('express');
const HerosController=require('../controllers/HerosController');

const rutasHeroes=(app)=>{
    let router=express.Router();
    router.get('/',HerosController.getHeros)
        .get('/:id',HerosController.getHero)
        .post('/',HerosController.createHero)

    app.use('/api/heros',router); // busca la ruta que contiene los método http que se consumirán
}

module.exports=rutasHeroes;



