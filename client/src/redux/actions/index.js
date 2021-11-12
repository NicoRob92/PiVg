import axios from 'axios'

/* export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
  }

export function removeMovieFavorite(payload) {
    return { type: "REMOVE_MOVIE_FAVORITE", payload };
  }
     */
export function getGames() {    
        return function(dispatch) {
         return axios.get("http://localhost:3001/videogames")
         .then(response => {
          dispatch({ type: "GET_GAMES", payload: response.data});
         });
  };      
    };
  
/*   
export function getDetails(id) {
    return function(dispatch) {
      return fetch("http://www.omdbapi.com/?apikey=20dac387&i=" + id)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_DETAILS", payload: json });
        });
    };
  } */