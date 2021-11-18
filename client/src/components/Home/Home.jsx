import React , { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  filterByData, filterGames, getGames , getGenres, orderbyName, reset} from "../../redux/actions/index"
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import './Home.css'
import Paginado from "../Paginado/Paginado";

export default function Home(){
    
    const dispatch = useDispatch()
    const games = useSelector((state) => state.gamesLoaded)
    const genres = useSelector((state) => state.genres)
    const search = useSelector((state) => state.search)
    const [currentP,setcurrentP] = useState(1)
    const [gamesP,setgamesP] = useState(20)    
    const lastGame = currentP * gamesP
    const firstGame = lastGame - gamesP
    let currentGames = games <=15 ? games : games.slice(firstGame,lastGame) 
    
    useEffect(() => {
        dispatch(getGames()) 
        dispatch(getGenres())       
    }, [])
    
    /* =-=-=-=--=-=-=-=GENEROS=-=-=-=-=-=-=-= */
    let generos = []
    if(games.length <= 15){
        currentGames.forEach(e => e.genres.map(e => generos.push(e.name)))
    }
    let generosF =[] 
    let geners = new Set(generos)
    for(const g of geners){
        generosF.push(g)
    } 
    
    /* =========HANDLERS======== */
    function handleFilter(e){
        dispatch(filterGames(e))
    }
    
    function handleByData(e){
        dispatch(filterByData(e))
    }
    
    function handleSort(e){
        dispatch(orderbyName(e))
    }
    
    function paginado(page){        
        setcurrentP(page)
    }
    
    return(
        <div className="containerHome">
           <div className="selectores">
            {/*  Generos */}
               <select onChange={e=> {e.preventDefault();handleFilter(e.target.value);setcurrentP(1)}}>
                   {/* TODOS GENEROS */}
                  {games === search ? <><option key="allg" value="ALL">Generos</option>
                  <option key = "all" value="ALLS">Todos</option></> : <option key="allg" value="ALL">Generos</option>}
                  
                    {/* MAP DE GENEROS */}
                  {games !== search ? genres.map(e => <option key={e.id} value={e.name}>{e.name}</option>) : (generosF.map(e => <option key={e} value={e}>{e}</option>)  )}
               </select>


             {/*   Existente o agregado */}
               <select onChange={e=> handleByData(e.target.value)}>
                   <option key="all origin" value = "ALL">Origin</option>
                   <option key="db" value = "DB">Creado</option>
                   <option key="api" value = "API">Existente</option>
               </select>
               <select onChange={e=> handleSort(e.target.value)}>
                   <option key="alf" value = "ALL">Alfabeticamente</option>
                   <option key= "az"value = "A-Z">A - Z</option>
                   <option key= "za"value = "Z-A">Z - A</option>
               </select>
               <Paginado gamesP = {gamesP} games = {games.length} paginado={paginado}/>
           </div>

           <div className="cartas">
           {currentGames.length < 1 ? <h1> LOADING </h1> : 
           currentGames.map(e => <Card id={e.id} key={e.id} name={e.name} genres = {e.genres.map(e => {return e.name + ' '})} img={e.background_image}/>)}
           </div>
       </div>

   
    )
}


