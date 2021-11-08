require('dotenv').config();
const axios = require('axios');
const { Router } = require('express')
const { API_KEY } = process.env
const { Genre , Videogame } = require('../db.js');
const router = Router();


router.get('/:id', async (req,res)=>{  

    const  id  = req.params.id
    if(id){
        try {
        let gameapi = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`) 
        console.log(gameapi.data)
        let gamedb = await Videogame.findOne({
            where:{
                id:id
            }
        })
        return gameapi ? res.json(gameapi.data) : res.json(gamedb)
    }catch{
      return res.sendStatus(404)
    }}})

module.exports = router;