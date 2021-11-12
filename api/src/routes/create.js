require('dotenv').config();
const axios = require('axios');
const { Router } = require('express')
const { API_KEY } = process.env
const { Genre , Videogame, Platforms } = require('../db.js');
const router = Router();

router.post('/', async(req,res) =>{

    try{    
    const {name,
         description,
         released,
         rating,
         platforms,
         genres,
         background_image
         } = req.body

       

        const game = await Videogame.create({
             name:name,
             description:description,
             released:released,
             rating:rating,
             background_image:background_image,
     }) 

     
     for(const plat of platforms){
        let p = await Platforms.findOrCreate({
            where:{
                name:plat
            }
        })      
        await game.addPlatforms(p[0])
     }
     
               
        await game.addGenres(genres)
        res.status(201).json({msg:"Creado con esssssito"})
    }catch(err){
        res.status(404).send('errrorrrrr')
    }

})

module.exports = router;