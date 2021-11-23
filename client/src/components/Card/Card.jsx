import React from "react";
import { Link } from "react-router-dom";
import './Card.modules.css'
export default function ({name , genres , img , id,rating}){

    return (
        
        <Link to={`/videogame/${id}`} className="containerCard" Style={`background-image: url(${img});text-decoration:none;`} >
        <div className='text'>
            <p className="titulo">{name}</p>
            <p className="generos"> {genres} </p>                   
        </div>
        </Link>
        
    )
}