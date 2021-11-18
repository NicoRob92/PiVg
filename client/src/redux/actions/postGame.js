import axios from 'axios';

/* =-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-= */
/* ==================POSTEO==================== */

export function postGame(payload) {
  return async  (dispatch) => {
    dispatch({ type: "POST", payload });

    let post = await axios.post("http://localhost:3001/videogame", payload);
    return post.data;
  };
}
