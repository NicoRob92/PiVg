import React , { useEffect } from "react";
import { connect } from "react-redux";
import { getGames } from "../redux/actions/index.js"
function Home({games , getGames}){
    
    useEffect(() => {
        getGames()        
    }, [])
    console.log(games[0])


    return(
        <div>
            <h1>hola</h1>
           {games[0].map(e => {return <div>
           <h1>{e.name}</h1>
           </div>})}
       </div>
   
    )
}

function mapStateToProps(state) {
    return {
        games: [state.gamesLoaded]
    }
}

export default connect(mapStateToProps,{ getGames })(Home)