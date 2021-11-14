import React , { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  filterByData, filterGames, getGames , getGenres, orderbyName} from "../../redux/actions/index"
import Card from "../Card/Card";
import './Home.css'
import Paginado from "../Paginado/Paginado";

export default function Home(){
    
    const dispatch = useDispatch()
    const games = useSelector((state) => state.gamesLoaded)
    const genres = useSelector((state) => state.genres)
    const [currentP,setcurrentP] = useState(1)
    const [gamesP,setgamesP] = useState(20)
    const lastGame = currentP * gamesP
    const firstGame = lastGame - gamesP
    let currentGames = games.slice(firstGame,lastGame)
    function paginado(pageNumber){
        setcurrentP(pageNumber)
    }
   
    useEffect(() => {
        dispatch(getGames()) 
        dispatch(getGenres())       
    }, [])


    function handleFilter(e){
        dispatch(filterGames(e))
    }

    function handleByData(e){
        dispatch(filterByData(e))
    }

    function handleSort(e){
        dispatch(orderbyName(e))
    }

/*     function handleOrder(e){
        let az = []
        currentGames.forEach(e => az.push(e))
        if(e === "ALL")  return currentGames = currentGames;
        if(e === "A-Z") {
            console.log(currentGames)
          return currentGames = az.sort((a,b)=>{
          if(a.name < b.name ) return -1
          if(a.name > b.name ) return 1;
          return 0
        })}
        if(e === "Z-A") return currentGames = az.sort((a,b)=>{
          if(a.name > b.name ) return -1
          if(a.name < b.name ) return 1;
          return 0
        })
    } */
    
    
    return(
        <div class="containerHome">
           <div className="selectores">
              {/*  Generos */}
               <select onChange={e=> handleFilter(e.target.value)}>
                   <option value="ALL">Todos</option>
                  {genres.map(e => <option value={e.name}>{e.name}</option>)}
               </select>
             {/*   Existente o agregado */}
               <select onChange={e=> handleByData(e.target.value)}>
                   <option value = "ALL">Todos</option>
                   <option value = "DB">Data Base</option>
                   <option value = "API">Api</option>
               </select>
               <select onChange={e=> handleSort(e.target.value)}>
                   <option value = "ALL">Normal</option>
                   <option value = "A-Z">A - Z</option>
                   <option value = "Z-A">Z - A</option>
               </select>
             
               <Paginado gamesP = {gamesP} games = {games.length} paginado = {paginado}/>
           </div>
           <div className="cartas">
           {currentGames?.map(e => {return <Card name={e.name} genres = {e.genres.map(e => {return e.name + ' '})} img={e.background_image}/>})}
           </div>
       </div>

   
    )
}


