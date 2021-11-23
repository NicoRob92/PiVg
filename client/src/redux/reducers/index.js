const initialState = {
    genres: [],
    gamesLoaded: [],
    oldGames:[],    
    details:{},
    search:[],
    oldSearch:[],
    roldSearch:[],
    roldGames:[],   
   


   
  };
  function rootReducer(state = initialState, action) {
    switch ( action.type) {
      /*=========== PEGARLE A LA API ================ LISTO */
      case "GET_GAMES": 
      return {...state , gamesLoaded:action.payload, oldGames:action.payload, roldGames:action.payload  }    
    case "GET_GENRES":
      return {...state , genres:action.payload} 
    case "GET_A_GAME":{      
      return {...state ,gamesLoaded:action.payload, search:action.payload, oldSearch:action.payload, roldSearch:action.payload}
    }
    case "GET_DETAILS":
      return{...state , details:action.payload}
    

    /*  ============== FILTROS ==================== LISTO */
    case "FILTER_GAMES":
      
      const games = state.oldGames
      const todos = state.oldGames
      const search = state.oldSearch
      const searched = state.oldSearch
      if(action.payload === "ALL"){
       return {...state, gamesLoaded : todos}}      
      else{  
        if(state.gamesLoaded !== state.search){
         let filtrado = games.filter(e => { for(let i=0;i<e.genres.length;i++){
         if(e.genres[i] === action.payload) return e}})
      return {...state, gamesLoaded:filtrado} }
       else{         
         if(action.payload === "ALLS") {
          state = {...state, search:searched}
          return {...state, gamesLoaded:state.search}
         }
         let filter = search.filter(e => { for(let i=0;i<e.genres.length;i++){
          if(e.genres[i] === action.payload) return e}})
          state = {...state, search:filter}
          return {...state, gamesLoaded:state.search}
       }
    }
       


      /* -==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
    /* ==========Base de datos O API=============== LISTO */
      case "FILTER_BYDATA":{     
        if(action.payload === "ALL") {return {...state,gamesLoaded: state.oldGames}}
        if(action.payload === "API"){          
            state = {...state, gamesLoaded:state.oldGames}
            return {...state, gamesLoaded: state.gamesLoaded.filter(e=> typeof e.id === 'number')}           
          }
          if(action.payload === "DB"){
          state = {...state, gamesLoaded:state.oldGames}
          return {...state, gamesLoaded: state.gamesLoaded.filter(e=> typeof e.id === 'string')}
        }}      

        case "FILTER_BYDATA_SEARCH":{     
          if(action.payload === "ALL") {return {...state,gamesLoaded: state.oldSearch}}
          if(action.payload === "API"){          
              state = {...state, gamesLoaded:state.oldSearch}
              return {...state, gamesLoaded: state.search.filter(e=> typeof e.id === 'number')}           
            }
            if(action.payload === "DB"){
            state = {...state, gamesLoaded:state.oldSearch}
            return {...state, gamesLoaded: state.search.filter(e=> typeof e.id === 'string')}
          }}      
      
    
      /* =-==-=-=-==-=-==-===-=-==-=-=-==-===--= */
      /* ==================ORDENAR============== */
      case "ORDER_BY_NAME": {
        let az = state.gamesLoaded.map(e => e)
        if(action.payload === "ALL")  return {...state,gamesLoaded : az.sort((a,b) => a.id-b.id) };
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
      case "ORDER_BY_RATING":{
        let high = state.gamesLoaded.map(e => e)      
       if(action.payload === "ALL") return {...state , gamesLoaded: high.sort((a,b) => a.id-b.id)}    
       if(action.payload === "HIGH") return { ...state ,gamesLoaded : high.sort((a,b)=> a.rating-b.rating)}
       if(action.payload === "LOW") return { ...state ,gamesLoaded : high.sort((a,b)=> b.rating-a.rating)}
      }
      /* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */
      /* =-=-=-=-=-=--=-=-=POST-=-=-=-=-=-=-=-=-=- */
      case "POST":
        return {...state}     
      
    default:
      return {...state}
    
  }
  }
  
  export default rootReducer; 