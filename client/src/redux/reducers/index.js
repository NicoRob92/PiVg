const initialState = {
    moviesFavourites: [],
    gamesLoaded: [],
    movieDetail: {}
  };

  function rootReducer(state = initialState, action) {
  switch ( action.type) {
    case "GET_GAMES": {
      return {...state , gamesLoaded:action.payload}
    }
    default:{
      return {...state}
    }
  }
  }
  
  export default rootReducer; 