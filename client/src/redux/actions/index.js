import axios from 'axios'

/* ======-=-=-=--=Filtros-=-=-=-=-=-=-=-=-=--= */
export function filterGames(payload) {
    return { type: "FILTER_GAMES", payload };
}


export function filterByData(payload){
  return {type: "FILTER_BYDATA" , payload }
}

export function filterByDataSearch(payload){
  return {type: "FILTER_BYDATA_SEARCH" , payload }
}


export function orderbyName(payload){
  return {type: "ORDER_BY_NAME" , payload}
}

export function orderbyRating(payload){
  return {type: "ORDER_BY_RATING" , payload}
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

export function getAGame(name) {  
  return function(dispatch) {
    if(name.length !== 0){
    return axios.get(`http://localhost:3001/videogames?name=${name}`)
    .then(response => {
      if(response.data.length !== 0){
    dispatch({ type: "GET_A_GAME", payload: response.data});    
     }})}else{
       alert ('Ingrese Juego')
     }
    }}
     


export function getDetails(id) {    
  return function(dispatch) {
    return axios.get(`http://localhost:3001/videogame/${id}`)
    .then(response => {
      console.log(response.data)
      if(response.data.length !== 0){
    dispatch({ type: "GET_DETAILS", payload: response.data});
      }else{
        alert ('Juego no encontrado')
      }
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

export function getPlatforms() {    
  return function(dispatch) {
    return axios.get("http://localhost:3001/platforms")
    .then(response => {
    dispatch({ type: "GET_PLATFORMS", payload: response.data});
    });
  };      
};

