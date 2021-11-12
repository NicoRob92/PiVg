require('dotenv').config();
const axios = require('axios');
const { Router } = require('express')
const { API_KEY } = process.env
const { Genre , Videogame ,Platforms} = require('../db.js');
const router = Router();


router.get('/:id', async (req,res)=>{  

    const  id  = req.params.id

    if (id.includes('-')){
        try{
           let gamedb = await Videogame.findByPk(id, {include: [Genre,Platforms]})      
           if(gamedb) return res.json(gamedb);

        }catch(err){
            return res.status(404).json({msg:err + 'database'})
        }
    }
        
    try {
       let gameapi = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`) 
      
       if(gameapi.data){
          const game = {
              name : gameapi.data.name,
              background_image: gameapi.data.background_image,
              genres : gameapi.data.genres,
              description: gameapi.data.description,
              released: gameapi.data.released,
              ranting:gameapi.data.ranting,
              platforms:gameapi.data.platforms,
          }
          res.json(game)
       }

       
  
    }catch{
      return res.status(404).send('No existe el juego')
    }}
    

)
module.exports = router;