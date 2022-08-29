import React, { Fragment } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link, NavLink } from "react-router-dom";
import {
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Button,
  Grid,
} from "@material-ui/core";
import Sidebar from "../Sidebar/sidebar";

import { connect } from "react-redux";
import { logout } from "../../actions/auth";
const tabbar = (props) => {
  const tabstyle = {
    color: "white",
    width: 150,
    textDecoration: "none",
  };

  return (
    <Fragment>
      <Grid container>
        <Grid item>
          <AppBar style={{ backgroundColor: "#b6932f", height: "100px" }}>
            <Toolbar>
              <Grid container>
                <Grid item xs={2} sm={2} md={2} lg={1} xl={1}>
                  <IconButton edge="start" color="inherit">
                    <Sidebar />
                  </IconButton>
                </Grid>

                <Grid item xs={6} sm={6} md={6} lg={3} xl={4}>
                <Link to="/home" style={{textDecoration: "none"}}>
              <Typography variant="h3" style={{color: "white"}}>
                Survey Site
              </Typography>
              </Link>
                </Grid>

                <Grid item xs={4} sm={4} md={2} lg={3} xl={2}>
                  <NavLink to="/survey">
                    <Button
                      variant="outlined"
                      style={{
                        backgroundColor: "white",
                        borderRadius: 20,
                        width: 150,
                        marginRight: 150,
                      }}
                    >
                      Go to Survey
                    </Button>
                  </NavLink>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={5} xl={2}>
                  <Tabs value={props.value} variant="fullWidth">
                    <Tab
                      label={
                        <NavLink to="/home" style={tabstyle}>
                          Home{" "}
                        </NavLink>
                      }
                    />

                    <Tab
                      label={
                        <NavLink to="/profile" style={tabstyle}>
                          Profile{" "}
                        </NavLink>
                      }
                    />

                    <Tab
                      label={
                        <NavLink to="/notifications" style={tabstyle}>
                          Notifications{" "}
                        </NavLink>
                      }
                    />
                  </Tabs>

                  {/* <Grid item xs={2} sm={2} md={4} lg={2} xl={2}>
              <button
                onClick={props.logout}
                style={{ borderRadius: 20, height: 30, marginTop: 20 }}
              >
                Log out
              </button>
                </Grid> */}
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  isauthenticated: state.auth.isauthenticated,
});

export default connect(mapStateToProps, { logout })(tabbar);
