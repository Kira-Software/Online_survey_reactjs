import React, { Fragment, useState } from "react";
import { Paper, Grid, FormControl, TextField, Button } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Header from "../Header/Header";
import { Redirect, Link } from "react-router-dom";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

import Alert from "../../layout/alert";

const Loging = ({ login, isauthenticated }) => {
  const [formdata, setformdata] = useState({
    username: "",
    password: ""
  });

  const { username, password } = formdata;

  const changer = e => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handlesubmit = async event => {
    event.preventDefault();
    console.log("SUCCESS");
    login(username, password);
  };

  if (isauthenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <Fragment>
      <Header />

      <Grid container>
        <Grid item xs={12} style={{ marginTop: 100, marginLeft: 200 }}>
          <Paper elevation={10} style={{ height: 300 }}>
            <Alert />
            <FormControl style={{ marginLeft: 100, marginTop: 50 }}>
              <form onSubmit={event => handlesubmit(event)}>
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <AccountCircle />
                  </Grid>
                  <Grid item>
                    <TextField
                      name="username"
                      label="username"
                      onChange={e => changer(e)}
                      value={username}
                    />
                  </Grid>
                </Grid>
                <TextField
                  name="password"
                  type="password"
                  label="password"
                  value={password}
                  onChange={e => changer(e)}
                  style={{ width: 200, marginLeft: 30 }}
                />
                <Button
                  color="primary"
                  variant="contained"
                  style={{ marginTop: 100, marginLeft: 0, width: 70 }}
                >
                  <input type="submit" value="Sign In" />
                </Button>
                <Link
                  to="/signup"
                  color="secondary"
                  style={{ marginTop: 0, marginLeft: 350 }}
                >
                  I don't have an account
                </Link>
              </form>
            </FormControl>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};



Loging.propTypes = {
  login: PropTypes.func.isRequired,
  isauthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isauthenticated: state.auth.isauthenticated
});

export default connect(mapStateToProps, { login })(Loging);
