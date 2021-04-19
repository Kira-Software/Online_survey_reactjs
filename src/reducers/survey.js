import {
  GET_MYSURVEY,
  CLEAR_MYSURVEY,
  GET_MYFILLSURVEY,
  GET_ALLCHOICE,
  DELETE_SURVEY
} from "../actions/types";

const initialstate = {
  loading: true,
  mysurvey: [],
  fillsurvey: [],
  allchoices: []
};

export default function(state = initialstate, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_MYSURVEY:
      return {
        ...state,
        mysurvey: payload,
        loading: false
      };

    case CLEAR_MYSURVEY:
      return {
        ...state,
        mysurvey: null,
        loading: false
      };

    case GET_MYFILLSURVEY:
      return {
        ...state,
        fillsurvey: payload,
        loading: false
      };

    case GET_ALLCHOICE:
      return {
        ...state,
        allchoices: payload,
        loading: false
      };

    case DELETE_SURVEY:
      return {
        ...state,
        mysurvey: payload,
        loading: false
      };

    default:
      return state;
  }
}
