import { SET_ALERT, REMOVE_ALERT } from "./types";
//import uuid from "uuid";

const setalert = (msg, alerttype) => dispatch => {
  const id = Date.now();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alerttype, id }
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 5000);
};

export default setalert;
