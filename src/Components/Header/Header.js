import React, { Fragment } from "react";
import { AppBar, Typography, Toolbar, Grid } from "@material-ui/core";

const header = props => {
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <AppBar  style={{ backgroundColor: "black" }}>
            <Toolbar>
              <Typography variant="h3" >
                Survey site
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default header;
