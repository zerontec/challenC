export const GET_TEXT = "GET_TEXT";
import axios from "axios";

const server = "http://localhost:5040";

export function getText(text) {
  return async function (dispatch) {
    // send to query server wiht metodo post
    // and return the response
    try {
      let response = await axios.get(`${server}/iecho?text=` + text);

      return dispatch({
        type: GET_TEXT,
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}
