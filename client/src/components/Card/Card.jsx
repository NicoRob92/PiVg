import React from "react";
import { Link } from "react-router-dom";
import './Card.css'
export default function ({name , genres , img , id}){

    return (
        
        <Link to={`/videogame/${id}`} className="containerCard" Style={`background-image: url(${img}) `} >
        <div >
            <h1 className="titulo">{name}</h1>
            <h1 className="generos"> {genres} </h1>
           
        </div>
        </Link>
        
    )
}