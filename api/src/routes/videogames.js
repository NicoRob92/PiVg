require('dotenv').config();
const axios = require('axios');
const { Router } = require('express')
const { API_KEY } = process.env
const { Genre , Videogame } = require('../db.js');
const router = Router();


router.get('/', async (req,res)=>{  

    const  name  = req.query.name
    if(name){
        try {
        let gameapi = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`) 
        
        let gamedb = await Videogame.findAll({
            where:{
                name:name
            }
        })
       let totalGames = [gamedb,gameapi.data]
       return res.json(totalGames)

    }catch{
      return res.sendStatus(404)
    }}

   try{
        let gamesapi = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`) // Traigo los datos de la api
        let gamedb = await Videogame.findAll()
        let totalGames = [gamedb,gamesapi.data]
   
        return res.json(totalGames)
  
   }
   catch{
    return res.sendStatus(404)
   }
   
})

module.exports = router;