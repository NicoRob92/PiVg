import React from "react";  

export default function Paginado({gamesP,games,paginado}){

    const pageNumber = []

    for(let i=1;i<=Math.ceil(games/gamesP);i++){
        pageNumber.push(i)
    }

    return(
        <div>
            {pageNumber?.map(page => <li>
                <a onClick={()=>paginado(page)}>{page}</a>
            </li>)}
        </div>
    )

}