import React from "react";  
import './Paginado.modules.css'
export default function Paginado({gamesP,games,paginado}){

    const pageNumber = []

    for(let i=1;i<=Math.ceil(games/gamesP);i++){
        pageNumber.push(i)
    }
    
    return(
        <div className="paginado">
         {/*  <button onClick=>Next</button> */}
         
            {pageNumber?.map(page => <button key={page} onClick={(e)=>paginado(page)}>
                {page}
            </button>)
            }
           
          
        </div>
    )

}