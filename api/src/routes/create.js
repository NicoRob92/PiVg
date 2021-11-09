require('dotenv').config();
const axios = require('axios');
const { Router } = require('express')
const { API_KEY } = process.env
const { Genre , Videogame } = require('../db.js');
const router = Router();

router.post('/', async(req,res) =>{
    const {name,
         description,
         fecha_de_lanzamiento,
         rating,
         plataformas
         } = req.body        
        const game = await Videogame.create({
             name:name,
             description:description,
             fecha_de_lanzamiento:fecha_de_lanzamiento,
             rating:rating,
             plataformas:plataformas
         }) 
         await game.addGenre(req.body.genre)
        res.sendStatus(201).json({msg:"prueba"})
})

module.exports = router;