import React, { Fragment } from "react";
import CopyrightIcon from "@material-ui/icons/Copyright";
import { Paper, Typography, Grid } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TelegramIcon from "@material-ui/icons/Telegram";
import { NavLink } from "react-router-dom";
const footer = props => {
  const style = {
    marginTop: 100,
    marginLeft: 150,
    height: 100,
    width: 60
  };
  return (
    <Fragment>
      <Grid container  style={{marginLeft:-100}}>
        <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
          <NavLink to="#">
            <FacebookIcon style={style} color="primary" />
          </NavLink>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
          <NavLink to="#">
            <YouTubeIcon style={style} color="secondary" />
          </NavLink>*/}
        </Grid>
     
        <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
          {" "}
          <NavLink to="#">
            <TwitterIcon style={style} color="primary" />
          </NavLink>
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
          {" "}
          <NavLink to="#">
            <GitHubIcon style={style} />
          </NavLink>
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
          {" "}
          <NavLink to="#">
            <TelegramIcon style={{ ...style, color: "green" }} />
          </NavLink>
        </Grid>
      </Grid>

      {/* <Paper style={{ height: 300, marginBottom: 200 }} elevation={5}>
        <div style={{ marginLeft: 50 }}></div>
      </Paper> */}

      <Paper style={{ height: 100,marginTop:300 }} elevation={3}>
        <Typography style={{ textAlign: "center" }}>
          All rights reserved <CopyrightIcon />
        </Typography>
      </Paper>
    </Fragment>
  );
};

export default footer;
