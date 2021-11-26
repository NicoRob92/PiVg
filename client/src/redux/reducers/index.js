const initialState = {
    genres: [],
    gamesLoaded: [],
    oldGames:[],    
    details:{},
    search:[],
    oldSearch:[],   
    platforms:[]


   
  };


  let filtrado =[]
  function rootReducer(state = initialState, action) {
    switch ( action.type) {
      /*=========== PEGARLE A LA API ================ LISTO */
      case "GET_GAMES": 
      return {...state , gamesLoaded:action.payload, oldGames:action.payload,}    
    case "GET_GENRES":
      return {...state , genres:action.payload} 
    case "GET_PLATFORMS":
      return {...state , platforms:action.payload} 
    case "GET_A_GAME":{      
      filtrado= []
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
        filtrado =[]
        state = {...state,search:[]}
       return {...state, gamesLoaded : todos}}      
      else{  
        if(state.gamesLoaded !== state.search){
         filtrado = games.filter(e => { for(let i=0;i<e.genres.length;i++){
         if(e.genres[i] === action.payload) return e}})
      return {...state, gamesLoaded:filtrado} }
       else{         
         if(action.payload === "ALLS") {
           filtrado=[]
          state = {...state, search:searched}
          return {...state, gamesLoaded:state.search}
         }
         filtrado = search.filter(e => { for(let i=0;i<e.genres.length;i++){
          if(e.genres[i] === action.payload) return e}})
          state = {...state, search:filtrado}
          return {...state, gamesLoaded:state.search}
       }
    }
       


      /* -==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
    /* ==========Base de datos O API=============== LISTO */
      case "FILTER_BYDATA":{     
        if(action.payload === "ALL") {
          if(filtrado.length !== 0){
            return {...state, gamesLoaded: filtrado} 
          }
          if(state.search.length !== 0){            
            return {...state,gamesLoaded: state.oldSearch}
          }
          return {...state,gamesLoaded: state.oldGames}}
        if(action.payload === "API"){   
            if(filtrado.length !== 0){
              return {...state, gamesLoaded: filtrado.filter(e=> typeof e.id === 'number')} 
            }
            if(state.search.length !== 0 ){
              state = {...state, gamesLoaded:state.oldSearch}
              return {...state, gamesLoaded: state.search.filter(e=> typeof e.id === 'number')}  
            }
            state = {...state, gamesLoaded:state.oldGames}
            return {...state, gamesLoaded: state.gamesLoaded.filter(e=> typeof e.id === 'number')}           
          }
          if(action.payload === "DB"){
            if(filtrado.length !== 0){              
              return {...state, gamesLoaded: filtrado.filter(e=> typeof e.id === 'string')}
            }
            if(state.search.length !== 0 ){
              state = {...state, gamesLoaded:state.oldSearch}
            return {...state, gamesLoaded: state.search.filter(e=> typeof e.id === 'string')}
            }
          state = {...state, gamesLoaded:state.oldGames}
          return {...state, gamesLoaded: state.gamesLoaded.filter(e=> typeof e.id === 'string')}
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