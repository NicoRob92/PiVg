import React , { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  filterByData, filterByDataSearch, filterGames, getGames , getGenres, orderbyName, orderbyRating, reset} from "../../redux/actions/index"
import Loader from "../Loader/loader.";
import Card from "../Card/Card";
import './Home.modules.css'
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
    let currentGames = games <= 15 ? games : games.slice(firstGame,lastGame) 
    const totalP = Math.ceil(games.length/gamesP)


    useEffect(() => {
        dispatch(getGames()) 
        dispatch(getGenres())       
    }, [])
    
    /* =-=-=-=--=-=-=-=GENEROS=-=-=-=-=-=-=-= */
    let generos = []
    if(games.length <= 15){
        currentGames.forEach(e => e.genres.map(e => generos.push(e)))
    }
    let generosF =[] 
    let geners = new Set(generos)
    for(const g of geners){
        generosF.push(g)
    } 
    
    
    /* =========HANDLERS======== */
    function handleFilter(e){
        dispatch(filterGames(e))
        setcurrentP(1)
    }
    
    function handleByData(e){
        dispatch(filterByData(e))
        setcurrentP(1)
    }
    
    function handleSort(e){
        dispatch(orderbyName(e))
        setcurrentP(1)
    }
    
    function paginado(page){        
        setcurrentP(page)
    }
    
    function aumentar(p){
        if(p<totalP){
            setcurrentP(curr => curr +1)
        }
        console.log(totalP)
    }
  
    return(
        <div className="containerHome">
           <div className="selectores">
            {/*  Generos */}
            <div>
               <select onChange={e=> {e.preventDefault();handleFilter(e.target.value);setcurrentP(1)}}>
                   {/* TODOS GENEROS */}
                  {games === search ? <><option key="allg" value="ALL">Generos</option>
                  <option key = "all" value="ALLS">Todos</option></> : <option key="allg" value="ALL">Generos</option>}
                  
                    {/* MAP DE GENEROS */}
                  {games !== search ? genres.map(e => <option key={e.id} value={e.name}>{e.name}</option>) : (generosF.map(e => <option key={e} value={e}>{e}</option>)  )}
               </select>


             {/*   Existente o agregado */}
              <select onChange={e=> handleByData(e.target.value)}>
                   <option key="all origin" value = "ALL">All</option>
                   <option key="db" value = "DB">Creado</option>
                   <option key="api" value = "API">Existente</option>
               </select> 
               <select onChange={e=> dispatch(filterByDataSearch(e.target.value))}>
                   <option key="all origin" value = "ALL">All Search</option>
                   <option key="db" value = "DB">Creado</option>
                   <option key="api" value = "API">Existente</option>
               </select> 
               <select onChange={e=> handleSort(e.target.value)}>
                   <option key="alf" value = "ALL">Alfabeticamente</option>
                   <option key= "az"value = "A-Z">A - Z</option>
                   <option key= "za"value = "Z-A">Z - A</option>
               </select>

               <select onChange={e=> dispatch(orderbyRating(e.target.value))}>
                   <option key="alf" value = "ALL">Rating</option>
                   <option key= "az"value = "LOW">High-Low</option>
                   <option key= "za"value = "HIGH">Low-High</option>
               </select>

               </div>
               <div className="paginadoB">
               <button onClick={()=>{if(currentP > 1) setcurrentP(curr => curr -1)}}>Prev</button>
               <Paginado gamesP = {gamesP} games = {games.length} paginado={paginado}/>
               <button onClick={()=>aumentar(currentP)}>Next</button>
               </div>
           </div>

           <div className="cartas">
           {currentGames.length < 1 ? <Loader/> : 
           currentGames.map(e => <Card id={e.id} key={e.id} name={e.name}  genres = {e.genres.map(e => {return e + ' '})} img={e.background_image}/>)}
           </div>
       </div>

   
    )
}


