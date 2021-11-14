import React from "react";
import './Card.css'
export default function ({name , genres , img}){

    return (
        <div className="containerCard" Style={`background-image: url(${img}) `} >
            <h1 className="titulo">{name}</h1>
            <h1 className="generos"> {genres} </h1>
           
        </div>
    )
}