require('dotenv').config();
const axios = require('axios');
const { Router } = require('express')
const { API_KEY } = process.env
const { Genre , Videogame } = require('../db.js');
const router = Router();


router.get('/', async (req,res)=>{  

    const  name  = req.query.name
    
          try {
        if(name !== undefined){
            let gameapi = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`)         
            let gamedb = await Videogame.findAll({
                where:{
                name:name
                }
            })
            let totalGames = [gamedb,gameapi.data]
            return res.json(totalGames)
        }    
     
        let gamesapi = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`) // Traigo los datos de la api
        let results = gamesapi.data.results
        let pagina = gamesapi.data.next
        let gamedb = await Videogame.findAll()        
        let total =  gamedb.concat(results)
         for(let i=2;i<6; i++){
            let next = await axios.get(pagina)
            let results1 = next.data.results
            total = total.concat(results1)
            pagina = next.data.next
        }        
     
        

        console.log(total.length)
        return res.json(total)
  
   }
   catch{
    return res.sendStatus(404)
   }
   
})

module.exports = router;