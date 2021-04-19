import { combineReducers } from "redux";
import alert from "./alert";
import auth from './auth'
import survey from './survey'
export default combineReducers({ alert,auth,survey });
