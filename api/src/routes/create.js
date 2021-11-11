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
         fecha_de_lanzamiento,
         rating,
         plataformas,
         genre
         } = req.body

         const plataforma = await Platforms.findOrCreate({
             where:{
                name:plataformas
            }
        })

        const game = await Videogame.create({
             name:name,
             description:description,
             fecha_de_lanzamiento:fecha_de_lanzamiento,
             rating:rating,
     }) 

        console.log(plataforma)
        await game.addPlatforms(plataforma[0])
        await game.addGenre(genre)
        res.status(201).json({msg:"Creado con esssssito"})
    }catch(err){
        res.status(404).json(err)
    }

})

module.exports = router;