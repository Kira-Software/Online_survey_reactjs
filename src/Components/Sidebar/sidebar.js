import React, { Fragment } from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";

import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import { logout } from "../../actions/auth"

 function Sidebar({logout}) {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (condition) => (event) => {
    setState(condition);
  };

  const sideList = () => (
    <div
      style={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <div>
        {["home", "profile", "notifications"].map((text, index) => (
          <Fragment key={index}>
            <NavLink to={`/${text}`} style={{ textDecoration: "none" }}>
              <Button key={text} style={{ margin: 10, marginLeft: 40 }}>
                {text}
              </Button>
            </NavLink>{" "}
            <br />
          </Fragment>
        ))}
      </div>
      <Divider />
      <List style={{ marginLeft: 10 }}>
        {["survey", "surveypreview", "surveyreport"].map((text, index) => (
          <Fragment key={index}>
            <NavLink to={`/${text}`} style={{ textDecoration: "none" }}>
              <Button
                color="default"
                key={text}
                style={{ margin: 10, marginLeft: 40 }}
              >
                {text}
              </Button>
            </NavLink>{" "}
            <br />
          </Fragment>
        ))}
      </List>

      <Divider />
      <List style={{ marginLeft: 10 }}>
        <Button color="secondary"  style={{ margin: 10, marginLeft: 40 }}  onClick={logout}>
          Logout
        </Button>
      </List>
    </div>
  );

  return (
    <div>
      <MenuIcon style={{ color: "white" }} onClick={toggleDrawer(true)} />

      <Drawer
        open={state}
        onClose={toggleDrawer(false)}
        style={{ height: "50%" }}
      >
        {sideList()}
      </Drawer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isauthenticated: state.auth.isauthenticated,
});

export default connect(mapStateToProps, { logout })(Sidebar);