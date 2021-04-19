import React, { Fragment } from "react";
import Tabbar from "../Header/tabs";
import Footer from "../Footer/footer";
import { Grid, Paper, Typography } from "@material-ui/core";

import { connect } from "react-redux";

const Contents = ({ user, loading }) => {
  return (
    <Fragment>
      <Tabbar value={0} />
      <br />
      <br />

      <Grid container spacing={10} style={{ marginTop: 10 }}>
        <Grid item xs={8} sm={6} md={6} lg={5} xl={4}>
          {" "}
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
              The main target of this project is to enable many researchers to
              collect data online from the target group without going anywhere.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={8} sm={6} md={6} lg={5} xl={4}>
          <Paper style={{ height: 300, marginTop: 100 }} elevation={5}>
            <img src="/images/surveyfilling.jpg" style={{ paddingLeft: 100 }} />
          </Paper>
        </Grid>

        <Grid item xs={8} sm={6} md={6} lg={5} xl={4}>
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
              I plan to work on this title because we have seen how much
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
        </Grid>
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
