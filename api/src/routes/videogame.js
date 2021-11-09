require('dotenv').config();
const axios = require('axios');
const { Router } = require('express')
const { API_KEY } = process.env
const { Genre , Videogame } = require('../db.js');
const router = Router();


router.get('/:id', async (req,res)=>{  

    const  id  = req.params.id

    if (id.includes('-')){
        try{
           let gamedb = await Videogame.findByPk(id, {include: Genre})      
           if(gamedb) return res.json(gamedb);

        }catch(err){
            return res.status(404).json({msg:err + 'database'})
        }
    }
        
    try {
       let gameapi = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`) 
       if(gameapi.data) return res.json(gameapi.data);       
    }catch(err){
      return res.status(404).json({msg:err})
    }}
    

)
module.exports = router;