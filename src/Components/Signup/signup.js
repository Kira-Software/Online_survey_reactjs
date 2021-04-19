import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import setalert from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
import Alert from "../../layout/alert";

import {
  Paper,
  Grid,
  TextField,
  Button,
  MenuItem,
  Select
} from "@material-ui/core";

import { Redirect } from "react-router-dom";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Header from "../Header/Header";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
//import Footer from "../Footer/footer";

const Signup = ({ setalert, register, isauthenticated }) => {
  const [formdata, setformdata] = useState({
    username: "",
    gender: "",
    job: "",
    birthdate: "",
    email: "",
    password: "",
    confirmpassword: ""
  });

  const {
    username,
    gender,
    job,
    birthdate,
    email,
    password,
    confirmpassword
  } = formdata;

  const styles = {
    width: "75%",
    marginLeft: "20%",
    marginTop: 20
  };

  const changer = e =>
    setformdata({ ...formdata, [e.target.name]: e.target.value });

  const handlesubmit = async event => {
    event.preventDefault();
    if (password !== confirmpassword) {
      setalert("password do not match", "danger");
    } else {
      register({ username, gender, job, birthdate, email, password });
      console.log("congratulations");
    }
  };

  if (isauthenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <Fragment>
      <Header />

      <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Paper
            elevation={10}
            style={{
              marginBottom: 100,
              width: "75%",
              marginLeft: "15%",
              marginTop: 150
            }}
          >
            <form onSubmit={event => handlesubmit(event)}>
              <FormControl style={{ marginTop: 50 }}>
                <h2 style={{ marginLeft: "30%" }}>Signup page</h2>
                <AccountCircle
                  style={{ width: "50%", height: "50%", marginLeft: "30%" }}
                />
                <br />

                <Alert />

                <TextField
                  name="username"
                  label="username"
                  style={styles}
                  onChange={e => changer(e)}
                  value={username}
                />

                <FormControl component="fieldset">
                  <FormLabel style={{ marginTop: 50, marginLeft: 40 }}>
                    Gender
                  </FormLabel>
                  <RadioGroup
                    aria-label="gender"
                    name="gender"
                    value={gender}
                    style={{ display: "inline", marginLeft: 50 }}
                    onChange={e => changer(e)}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                  </RadioGroup>
                </FormControl>

                <FormLabel style={{ ...styles, marginBottom: -20 }}>
                  Job
                </FormLabel>
                <Select
                  style={styles}
                  labelId="demo-simple-select-filled-label"
                  name="job"
                  value={job}
                  onChange={e => changer(e)}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Software Engineer"}>
                    Software Engineer
                  </MenuItem>
                  <MenuItem value={"Doctor"}>Doctor</MenuItem>
                  <MenuItem value={"Teacher"}>Teacher</MenuItem>
                  <MenuItem value={"Other"}>Other</MenuItem>
                </Select>

                <FormLabel style={styles}>Birth date</FormLabel>

                <input
                  type="date"
                  name="birthdate"
                  value={birthdate}
                  style={styles}
                  onChange={e => changer(e)}
                />

                <TextField
                  name="email"
                  type="email"
                  label="email"
                  style={styles}
                  value={email}
                  onChange={e => changer(e)}
                />
                <TextField
                  name="password"
                  type="password"
                  label="password"
                  style={styles}
                  value={password}
                  onChange={e => changer(e)}
                />

                <TextField
                  name="confirmpassword"
                  type="password"
                  label="confirm password"
                  value={confirmpassword}
                  style={styles}
                  onChange={e => changer(e)}
                />

                <Button
                  color="primary"
                  variant="contained"
                  type="submit"
                  style={{ marginTop: "50%", width: "10%" }}
                >
                  <input type="submit" value="Register" />
                </Button>
              </FormControl>
            </form>
          </Paper>
        </Grid>
      </Grid>

      {/* <Footer /> */}
    </Fragment>
  );
};

Signup.propTypes = {
  setalert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isauthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isauthenticated: state.auth.isauthenticated
});

export default connect(mapStateToProps, { setalert, register })(Signup);
