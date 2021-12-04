const express=require('express');
const app=express();
const log=require('debug')('app');
const herosPath = require('./routers/heros');
const dataBD=require('./database/database');
const rutasHeroes = require('./routers/heros');
const rutasVillanos=require('./routers/villans')

app.use(express.json());
dataBD(); // se va a migrar a otro modulo: donde haremos las operaciones para cada crud

rutasHeroes(app);
rutasVillanos(app);

app.listen(process.env.PORT || 4000,()=>{
    log('Inicia servidor');
    console.log('Inicia el servidor');
});