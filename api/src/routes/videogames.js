require('dotenv').config();
const axios = require('axios');
const { Router } = require('express')
const { API_KEY } = process.env
const { Genre , Videogame } = require('../db.js');
const router = Router();


router.get('/', async (req,res)=>{  
    
    const  name  = req.query.name
    
       
        if(name !== undefined){
            let gameapi = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`)         
            let gamedb = await Videogame.findAll({
                where:{
                name:name
                }
            })
            let totalGames = gamedb.concat(gameapi.data.results)
            return res.json(totalGames)
        } 
        
        
        else{ 
           var games = (num)=>{
                const n = num/20;
                
                const total =[]
                for(let i=1; i<= n; i++){
                    
                    if(i<2){
                        let game =  axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`) 
                        total.push(game)   
               }else {
                   let game = axios.get(`https://api.rawg.io/api/games?key=278629b546904ca0b9a55a5a19d6f879&page=${i}`)
                   total.push(game)
                }
            }
            
            return total;
        }
        
        let gamedb = await Videogame.findAll({include:Genre})
        
        let total = await Promise.all(games(100))
        total= total.map(e => {
            return e.data.results
        })  

        total = total.concat(gamedb)
       
        return  res.status(200).json(total)
        }
})

module.exports = router;