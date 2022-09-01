import axios from "axios";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  GET_MYSURVEY,
  GET_MYFILLSURVEY,
  GET_ALLCHOICE
} from "./types";
import setalert from "./alert";
import setAuthToken from "../utils/setAuthToken";

export const loaduser = () => async dispatch => {
  // console.log("inside the loaduser function");
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("https://survey-express-project.herokuapp.com/api/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

export const register = ({
  username,
  gender,
  job,
  birthdate,
  email,
  password
}) => async dispatch => {
  const newuser = {
    username,
    gender,
    job,
    birthdate,
    email,
    password
  };

  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  const body = JSON.stringify(newuser);

  try {
    //  console.log("i am in the try");
    const res = await axios.post("https://survey-express-project.herokuapp.com/api/user", body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

    dispatch(loaduser());

    // console.log(res);
  } catch (err) {
    console.log("i am in catch");

    const errors = err.response.data.errors;
    console.log("the error is", errors);

    if (errors) {
      errors.forEach(err => {
        dispatch(setalert(err.msg, "danger"));
      });
    }

    dispatch({
      type: REGISTER_FAIL
    });
    console.error(err.message);
  }
};

export const updateuser = ({
  username,
  gender,
  job,
  birthdate,
  email,
  password
}) => async dispatch => {
  const updateuser = {
    username,
    gender,
    job,
    birthdate,
    email,
    password
  };

  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  const body = JSON.stringify(updateuser);

  try {
    // console.log("i am in the update try");
    const res = await axios.post("https://survey-express-project.herokuapp.com/api/updateprofile", body, config);

    // dispatch({
    //   type: REGISTER_SUCCESS,
    //   payload: res.data
    // });

    dispatch(loaduser());
    dispatch(getsurveytofill());
    dispatch(setalert("User updated successfully", "done"));

    console.log(res);
  } catch (err) {
    console.log("i am in catch");

    const errors = err.response.data.errors;
    console.log("the error is", errors);
    console.log("the value of new error is ", errors[0].msg);

    if (errors) {
      errors.forEach(err => {
        dispatch(setalert(err.msg, "danger"));
      });
    }

    console.error(err.message);
  }
};

export const login = (username, password) => async dispatch => {
  // console.log("inside the login");
  const newuser = {
    username,
    password
  };

  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  const body = JSON.stringify(newuser);

  try {
    //console.log("i am in the login try");
    const res = await axios.post("https://survey-express-project.herokuapp.com/api/auth", body, config);
    // console.log("the res.data value is that ",res.data)

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loaduser());

    console.log(res);
  } catch (err) {
    //  console.log("i am in login catch");
    //console.log("the main error is that ", err.response.data.errors);

    const errors = err.response.data.errors;
    console.log("the error is", errors);
    // console.log("the length of the error array is", errors.length);

    if (errors) {
      errors.forEach(err => {
        dispatch(setalert(err.msg, "danger"));
      });
    }

    dispatch({
      type: LOGIN_FAIL
    });
    console.error(err.message);
  }
};

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT
  });
  // dispatch({
  //   type: CLEAR_MYSURVEY
  // });
};

export const addsurvey = ({
  title,
  minage,
  maxage,
  job,
  gender,
  myquestion,
  posteddate
}) => async dispatch => {
  // console.log("inside the add survey");
  const newsurvey = {
    title,
    minage,
    maxage,
    job,
    gender,
    myquestion,
    posteddate
  };

  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  const body = JSON.stringify(newsurvey);

  try {
    //   console.log("inside try myquestion is", myquestion);
    const res = await axios.post("https://survey-express-project.herokuapp.com/api/survey", body, config);

    // dispatch({
    //   type: LOGIN_SUCCESS,
    //   payload: res.data
    // });

    // dispatch(loaduser());

    dispatch(setalert("Survey is created successfully", "done"));

    console.log("the sended data is", res);
  } catch (err) {
    console.log("i am in add survey catch");

    const errors = err.response.data.errors;
    console.log("the error is", errors);

    console.error("the catch error found is ", err.message);
  }
};

export const getmysurvey = () => async dispatch => {
  //  console.log("inside the getmysurvey action");
  //dispatch(loaduser());
  try {
    const res = await axios.get(`https://survey-express-project.herokuapp.com/api/survey`);
    //  console.log("the result of my survey in action is", res.data);

    dispatch({
      type: GET_MYSURVEY,
      payload: res.data
    });

    // dispatch({
    //   type: CLEAR_MYSURVEY
    // });
    //console.log("the value of res.data after dispatch is ", re);
  } catch (err) {
    console.log("there is some error while ferching survey for you");
    console.error(err.message);
  }
};

////////////////////////////////////////////////////////////////////////////////////

export const getsurveytofill = () => async dispatch => {
  // console.log("inside the getsurveytofill action");

  try {
    const res = await axios.get(`https://survey-express-project.herokuapp.com/api/givemesurvey`);

    dispatch({
      type: GET_MYFILLSURVEY,
      payload: res.data
    });
  } catch (err) {
    console.log("there is some error while fetching survey for you");
    console.error(err.message);
  }
};

export const addchoice = ({ theqid, myanswers }) => async dispatch => {
  // console.log("inside the addchoice method");
  // console.log("the value of theqid is ", theqid);
  // console.log("the value of myanswers is ", myanswers);
  const qid = theqid;
  const mychoice = myanswers;
  const newchoice = {
    qid,
    mychoice
  };

  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  const body = JSON.stringify(newchoice);
  console.log("the value of body is ", body);

  try {
    //  console.log("inside try myanswers is", myanswers);
    const res = await axios.post(`https://survey-express-project.herokuapp.com/api/postchoice/${theqid}`, body, config);

    dispatch(setalert("Thanks for having your time !!!", "answerres"));

    console.log("the sended choice data is", res);
  } catch (err) {
    console.log("i am in add choice catch");

    const errors = err.response.data.errors;
    console.log("the error is", errors);

    console.error("the catch error found is ", err.message);
  }
};

export const getallchoices = () => async dispatch => {
  // console.log("inside the getallchoices action");

  try {
    const res = await axios.get(`https://survey-express-project.herokuapp.com/api/issubmitted`);

    dispatch({
      type: GET_ALLCHOICE,
      payload: res.data
    });
  } catch (err) {
    console.log("there is some error while fetching survey for you");
    console.error(err.message);
  }
};

export const deletemysurvey = id => async dispatch => {
  //  console.log("inside the deletemysurvey action");

  try {
    await axios.get(`https://survey-express-project.herokuapp.com/api/deletesurvey/${id}`);

    dispatch(getmysurvey());
  } catch (err) {
    console.log("there is some error while deleting survey for you");
    console.error(err.message);
  }
};
