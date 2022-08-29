import React, { Fragment } from "react";
import CopyrightIcon from "@material-ui/icons/Copyright";
import { Paper, Typography, Grid } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TelegramIcon from "@material-ui/icons/Telegram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import { Link, NavLink } from "react-router-dom";
const footer = props => {
  const style = {
    marginTop: 100,
    marginLeft: 50,
    height: 30,
    width: 30,
    backgroundColor: "white"
  };
  return (
    <Fragment>
     <Grid container  style={{backgroundColor: "#0941A3", height: "400px"}}>
        <Grid item xs={6} sm={4} md={4} lg={4} xl={4}>
          <ul style={{color: "white", listStyleType: "none", margin: "100px"}}>
            <li style={{margin: "20px"}}> <Link to="/home" style={{color: "white", textDecoration: "none"}}>Home</Link></li>
            <li style={{margin: "20px"}}> <Link to="/profile" style={{color: "white", textDecoration: "none"}}>Profile</Link></li>
            <li style={{margin: "20px"}}> <Link to="/notifications" style={{color: "white", textDecoration: "none"}}>Notifications</Link></li>

          </ul>
       
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
        <ul style={{color: "white", listStyleType: "none", margin: "100px"}}>
            <li style={{margin: "20px"}}> <Link to="/survey" style={{color: "white", textDecoration: "none"}}>Survey</Link></li>
            <li style={{margin: "20px"}}> <Link to="/surveypreview" style={{color: "white", textDecoration: "none"}}>Survey Preview</Link></li>
            <li style={{margin: "20px"}}> <Link to="/surveyreport" style={{color: "white", textDecoration: "none"}}>Survey Report</Link></li>

          </ul>
       
       </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
        <a href="https://github.com/Kira-Software" target="_blank">
            <GitHubIcon style={style} />
          </a>
          <a href="https://www.linkedin.com/in/kirubel-girmay-886966175/" target="_blank">
            <LinkedInIcon style={style} color="primary" />
          </a>
        </Grid>
     
       {/*   <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
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
        </Grid> */}
      </Grid>

      {/* <Paper style={{ height: 300, marginBottom: 200 }} elevation={5}>
        <div style={{ marginLeft: 50 }}></div>
      </Paper> */}

      {/* <Paper style={{ height: 100,marginTop:300 }} elevation={3}>
        <Typography style={{ textAlign: "center" }}>
          All rights reserved <CopyrightIcon />
        </Typography>
      </Paper> */}
    </Fragment>
  );
};

export default footer;
