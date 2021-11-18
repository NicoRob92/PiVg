const initialState = {
    genres: [],
    gamesLoaded: [],
    oldGames:[],    
    details:{},
    search:[],
    oldSearch:[]
   
  };
  function rootReducer(state = initialState, action) {
    switch ( action.type) {
      /*=========== PEGARLE A LA API ================ LISTO */
      case "GET_GAMES": 
      return {...state , gamesLoaded:action.payload, oldGames:action.payload}    
    case "GET_GENRES":
      return {...state , genres:action.payload} 
    case "GET_A_GAME":{
      if(!action.payload) return {...state, gamesLoaded:state.oldGames}
      return {...state ,gamesLoaded:action.payload, search:action.payload, oldSearch:action.payload}
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
         if(e.genres[i].name === action.payload) return e
       }})
      return {...state, gamesLoaded:filtrado} }
       else{         
         if(action.payload === "ALLS") {
          state = {...state, search:searched}
          return {...state, gamesLoaded:state.search}
         }
         let filter = search.filter(e => { for(let i=0;i<e.genres.length;i++){
          if(e.genres[i].name === action.payload) return e}})
          state = {...state, search:filter}
          return {...state, gamesLoaded:state.search}
       }
    }
       


      /* -==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
    /* ==========Base de datos O API=============== LISTO */
      case "FILTER_BYDATA":{
      
       let db = []
       let api =[]
        if(action.payload === "ALL") return {...state,gamesLoaded: state.oldGames}
        
        if(action.payload === 'DB'){
          state.gamesLoaded === state.search ? db = state.oldSearch : db = state.oldGames
          db = db.filter(e => typeof e.id === 'string')            
            return {...state, gamesLoaded : db}
        }
        
        else if( action.payload === 'API'){
          state.gamesLoaded === state.search ? api = state.oldSearch : api = state.oldGames
          api= api.filter(e => typeof e.id === 'number')        
          return {...state, gamesLoaded : api}}
        } 
      /* =-==-=-=-==-=-==-===-=-==-=-=-==-===--= */
      /* ==================ORDENAR============== */
      case "ORDER_BY_NAME": {
        let az = []
        state.gamesLoaded.forEach(e => az.push(e))
        let normal = []
        state.gamesLoaded.forEach(e => normal.push(e))
        if(action.payload === "ALL")  return {...state,gamesLoaded : normal.sort((a,b) => a.id-b.id) };
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

      case "ORDER_BY_NAME_SEARCH": {
        let az = []
        state.gamesLoaded.forEach(e => az.push(e))
        let normal = []
        state.gamesLoaded.forEach(e => normal.push(e))
        if(action.payload === "ALL")  return {...state,gamesLoaded : normal.sort((a,b) => a.id-b.id) };
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
      /* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */
      /* =-=-=-=-=-=--=-=-=POST-=-=-=-=-=-=-=-=-=- */
      case "POST":
        return {...state}     
      
    default:
      return {...state}
    
  }
  }
  
  export default rootReducer; 