import React, { Fragment } from "react";
import { Grid, Paper, Typography, Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
const main = props => {
  return (
    <Fragment>
      <hr />
      <Grid container spacing={3} style={{ width: "100%", marginTop: 100 }}>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Paper style={{ height: 200, padding: 20, margin: 30 }} elevation={10}>
            <Typography variant="h6">Wellcome to the survey site</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Paper
            style={{ height: 200, padding: 20, margin: 30 }}
            elevation={10}
          >
            <Typography variant="h6">
              SignUp if you are not registered yet
            </Typography>
            <Button variant="contained" color="primary" style={{ margin: 50 }}>
              <NavLink to="/signup" style={{ color: "white" }}>
                SignUp
              </NavLink>
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default main;
