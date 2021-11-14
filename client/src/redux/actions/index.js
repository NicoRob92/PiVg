import axios from 'axios'

export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
  }
/* ======-=-=-=--=Filtros-=-=-=-=-=-=-=-=-=--= */
export function filterGames(payload) {
    return { type: "FILTER_GAMES", payload };
}

export function filterByData(payload){
  return {type: "FILTER_BYDATA" , payload }
}

export function orderbyName(payload){
  return {type: "ORDER_BY_NAME" , payload}
}
/* ============PEDIDOS A LA API=============== */
export function getGames() {    
  return function(dispatch) {
    return axios.get("http://localhost:3001/videogames")
    .then(response => {
    dispatch({ type: "GET_GAMES", payload: response.data});
    });
  };      
};
  
export function getGenres() {    
  return function(dispatch) {
    return axios.get("http://localhost:3001/genres")
    .then(response => {
    dispatch({ type: "GET_GENRES", payload: response.data});
    });
  };      
};

/* =-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-= */