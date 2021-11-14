const initialState = {
    genres: [],
    gamesLoaded: [],
    oldGames:[],    
  };

  function rootReducer(state = initialState, action) {
  switch ( action.type) {
    /*=========== PEGARLE A LA API ================ LISTO */
    case "GET_GAMES": 
      return {...state , gamesLoaded:action.payload, oldGames:action.payload}    
    case "GET_GENRES":
      return {...state , genres:action.payload}  
    /*  ============== FILTROS ==================== LISTO */
    case "FILTER_GAMES":
      const games = state.oldGames
      const todos = state.oldGames
      if(action.payload === "ALL"){
       return {...state, gamesLoaded : todos}
      }else{  
      const filtrado = games.filter(e => { for(let i=0;i<e.genres.length;i++){
         if(e.genres[i].name === action.payload) return e
       }})
      return {...state, gamesLoaded:filtrado} }
      /* -==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
    /* ==========Base de datos O API=============== LISTO */
      case "FILTER_BYDATA":{
          let db = state.oldGames
           let api =state.oldGames
        if(action.payload === "ALL") return {...state,gamesLoaded: state.oldGames}
        if(action.payload === 'DB'){
          db = db.filter(e => typeof e.id === 'string')            
            return {...state, gamesLoaded : db}
        }
        else if( action.payload === 'API'){
          api= api.filter(e => typeof e.id === 'number')        
          return {...state, gamesLoaded : api}
        }       
      }
      /* =-==-=-=-==-=-==-===-=-==-=-=-==-===--= */
      /* ==================ORDENAR============== */
      case "ORDER_BY_NAME": {
        let az = []
        state.gamesLoaded.forEach(e => az.push(e))
        let normal = [...state.oldGames]        
        if(action.payload === "ALL") {  return {...state,gamesLoaded : normal} };
        if(action.payload === "A-Z") return {...state,gamesLoaded : az.sort((a,b)=>{
          if(a.name < b.name ) return -1
          if(a.name > b.name ) return 1;
          return 0
        })}
        if(action.payload === "Z-A") return {...state,gamesLoaded : az.sort((a,b)=>{
          if(a.name > b.name ) return -1
          if(a.name < b.name ) return 1;
          return 0
        })}
      
      }
      

    


    default:
      return {...state}
    
  }
  }
  
  export default rootReducer; 