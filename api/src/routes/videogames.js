require('dotenv').config();
const axios = require('axios');
const { Router } = require('express')
const { API_KEY } = process.env
const { Genre , Videogame, Platforms } = require('../db.js');
const router = Router();


router.get('/', async (req,res)=>{  
    
    const  name  = req.query.name     
        if(name !== undefined){
            try{
            let gameapi = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`)         
            let gamedb = await Videogame.findAll({
                where:{
                name:name
                }, include: [Genre,Platforms]
            })          
            if(gameapi.data.results.length === 0 && gamedb.length === 0) return res.status(404).send('No existe el juego')
            let totalGames = gamedb.concat(gameapi.data.results)
            let games = totalGames.map(e => {
                return {
                    id:e.id,                  
                    name:e.name,                  
                    genres:e.genres,
                    rating:e.rating,
                    background_image:e.background_image
            }})
            games = games.filter(e => e.genres.length !== 0)
            games = games.sort((a,b)=> a.id-b.id)
            if(games.length > 15){
            let nArr = []            
            for(let i=1;i <= 15;i++){
                nArr.push(games[i])
            }
            return res.json(nArr)  
            }
            
            res.json(games)
        }catch{
            res.status(404).send('No se encontro el videojuego')
        }
        } 
               
        else{ 
           var games = (num)=>{
                const n = num/20;
                
                let total =[]
                for(let i=1; i<= n; i++){
                    
                    if(i<2){
                        let game =  axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`) 
                       total = [...total, game]
               }else {
                   let game = axios.get(`https://api.rawg.io/api/games?key=278629b546904ca0b9a55a5a19d6f879&page=${i}`)
                    total = [...total,game]
                }
            }
            
            return total;
        }
        
        let gamedb = await Videogame.findAll({include:Genre})
        
        let total = await Promise.all(games(100))
        let total2 =[]
        total= total.map(e => e.data.results.map(r => total2.push(r)))  
        total2 = total2.concat(gamedb)

       
        let games2 = total2.map(e => {
            return {        
                id:e.id,          
                name:e.name,
                rating:e.rating,                  
                genres:e.genres,
                background_image:e.background_image,
                
        }})
        games2= games2.sort((a,b)=> a.id-b.id)
        return  res.status(200).json(games2)
    }
})

module.exports = router;