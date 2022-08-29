import React, { Fragment } from "react";
import Tabbar from "../Header/tabs";
import Footer from "../Footer/footer";
import { Button, Grid, Paper, Typography } from "@material-ui/core";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Contents = ({ user, loading }) => {
  return (
    <Fragment>
      <Tabbar value={0} />
      <br />
      <br />

      <Grid container style={{ marginTop: 10 }}>
        <Grid item xs={8} sm={6} md={6} lg={4} xl={4}>
          {" "}
          <Paper
            style={{
              height: 600,
              marginTop: 100,
              marginLeft: 50,
              borderRadius: 10,
              backgroundColor: "#0941A3",
              color: "white"
            }}
            elevation={5}
          >
            <Typography variant="h2" style={{ fontStyle: "italic", padding: 30 }}>
   ONLINE SURVEY
            </Typography>
            <Typography variant="h6" style={{margin:"20px"}}>
                     The main target of this project is to enable researchers to
              collect data online from the target group without going anywhere.</Typography>
              <Link to="/survey" style={{textDecoration: "none"}}>
            <Button style={{color: "#0941A3", backgroundColor: "white", width: "200px", borderRadius: "20px", height: "50px", margin: "100px"}}>My Survey</Button>

              </Link>
          </Paper>
        </Grid>

        <Grid item xs={8} sm={6} md={6} lg={8} xl={4}>
          <Paper style={{ height: 600, marginTop: 100 }} elevation={5}>
            <img src="/images/survey3.jpg" style={{ paddingLeft: 100 }} height="600"/>
          </Paper>
        </Grid>

        {/* <Grid item xs={8} sm={6} md={6} lg={5} xl={4}>
          <Paper
            style={{
              height: 300,
              marginTop: 100,
              marginLeft: 100,
              borderRadius: 10
            }}
            elevation={5}
          >
            <Typography style={{ fontStyle: "italic", padding: 30 }}>
              I planned to work on this title because we have seen how much
              difficult it is to collect survey for researchers. There may be
              budget as well as time constraint to ger the data in order to
              complete the research.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={8} sm={6} md={6} lg={5} xl={4}>
          <Paper style={{ height: 300, marginTop: 100 }} elevation={5}>
            <img src="/images/surveystress.jpg" style={{ paddingLeft: 100 }} />
          </Paper>
        </Grid>*/}
      </Grid> 

      <div style={{ marginTop: 300 }}>
        <Footer />
      </div>
    </Fragment>
  );
};

Contents.propTypes = {
  // user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.auth.user,
  loading: state.auth.loading
});

export default connect(mapStateToProps)(Contents);
