import React, { Fragment } from "react";
import Headerhome from "./headerhome";
import Main from "./main";
import Footer from "../Footer/footer";

import { Route, Switch } from "react-router-dom";
import Login from "../Login/login";
import Signup from "../Signup/signup";
import Contents from "../Real/contents";
import Profile from "../Real/profile";
import Survey from "../Survey/survey";
import Notifications from "../Real/notifications";
import Surveypreview from "../Survey/surveypreview";
import Surveyreport from "../Survey/surveyreport";

import Privateroute from "../../utils/privateroute";
const Hheader = () => {
  return (
    <Fragment>
      <Headerhome />
      <Main />
      <div style={{ marginTop: 300 }}>
        <Footer />
      </div>
    </Fragment>
  );
};

const homepage = props => {
  return (
    <Fragment>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Hheader} />
        <Route path="/signup" exact component={Signup} />
        <Privateroute path="/home" exact component={Contents} />
        <Privateroute path="/profile" exact component={Profile} />
        <Privateroute path="/notifications" exact component={Notifications} />
        <Privateroute path="/survey" exact component={Survey} />
        <Privateroute path="/surveypreview" exact component={Surveypreview} />
        <Privateroute path="/surveyreport" exact component={Surveyreport} />
      </Switch>
    </Fragment>
  );
};

export default homepage;
