import React, { Fragment, useState, useEffect } from "react";
import Tabbar from "../Header/tabs";
import {
  Grid,
  Paper,
  Typography,
  Button,
  TextField,
  Select,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";
import AccountCircle from "@material-ui/icons/AccountCircle";

import MenuItem from "@material-ui/core/MenuItem";
import Footer from "../Footer/footer";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateuser } from "../../actions/auth";
import { getmysurvey } from "../../actions/auth";
import { getallchoices } from "../../actions/auth";
import { loaduser } from "../../actions/auth";

import Alert from "../../layout/alert";
import setalert from "../../actions/alert";

const Profile = ({ user, loading, setalert, updateuser }) => {
  useEffect(() => {
    getmysurvey();
    getallchoices();
  }, []);
  const listyle = {
    marginBottom: 20
  };

  //////////////////////////////////////////////////////////////////
  const [unameopen, setUnameOpen] = React.useState(false);

  const handleuname = () => {
    setUnameOpen(!unameopen);
  };
  let unamestyle = null;
  unameopen === true
    ? (unamestyle = {
        display: "block",
        marginLeft: 200
      })
    : (unamestyle = {
        display: "none"
      });

  const typostyles = { marginTop: 90 };
  ///////////////////////////////////////////////////////////////////
  const [genderopen, setGenderOpen] = React.useState(false);

  const handlegender = () => {
    setGenderOpen(!genderopen);
  };
  let genderstyle = null;
  genderopen === true
    ? (genderstyle = {
        display: "block",
        marginLeft: 200
      })
    : (genderstyle = {
        display: "none"
      });

  //const typostyles = { marginTop: 90 };
  ///////////////////////////////////////////////////////////////////
  const [jobopen, setJobOpen] = React.useState(false);

  const handlejob = () => {
    setJobOpen(!jobopen);
  };
  let jobstyle = null;
  jobopen === true
    ? (jobstyle = {
        display: "block",
        marginLeft: 200
      })
    : (jobstyle = {
        display: "none"
      });

  //const typostyles = { marginTop: 90 };
  ////////////////////////////////////////////////////////////////////////////
  const [birthopen, setBirthOpen] = React.useState(false);

  const handlebirth = () => {
    setBirthOpen(!birthopen);
  };
  let birthstyle = null;
  birthopen === true
    ? (birthstyle = {
        display: "block",
        marginLeft: 200
      })
    : (birthstyle = {
        display: "none"
      });
  ////////////////////////////////////////////////////////////////////
  // const typostyles = { marginTop: 90 };

  const [emailopen, setEmailOpen] = React.useState(false);

  const handleemail = () => {
    setEmailOpen(!emailopen);
  };
  let emailstyle = null;
  emailopen === true
    ? (emailstyle = {
        display: "block",
        marginLeft: 200
      })
    : (emailstyle = {
        display: "none"
      });

  // const typostyles = { marginTop: 90 };
  ///////////////////////////////////////////////////////////////
  const [passopen, setPassOpen] = React.useState(false);

  const handlepass = () => {
    setPassOpen(!passopen);
  };
  let passstyle = null;
  passopen === true
    ? (passstyle = {
        display: "block",
        marginLeft: 200
      })
    : (passstyle = {
        display: "none"
      });
  //////////////////////////////////////////////////////////////////////////
  // const typostyles = { marginTop: 90 };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  let mystyle = null;
  open === true
    ? (mystyle = {
        display: "block",
        marginLeft: 200
      })
    : (mystyle = {
        display: "none"
      });

  const styles = {
    width: 200,
    marginLeft: 30,
    marginTop: 20
  };

  const fabstyles = { height: 30, width: 40 };

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

  const changer = e =>
    setformdata({ ...formdata, [e.target.name]: e.target.value });

  const handlesubmit = async event => {
    event.preventDefault();

    setOpen(false);
    updateuser({ username, gender, job, birthdate, email, password });
    console.log("congratulations");
  };

  const handlepasssubmit = async event => {
    event.preventDefault();

    if (password === "" || confirmpassword === "") {
      setalert("you have to provide the password and confirm it", "danger");
    } else if (password !== confirmpassword) {
      setalert("password do not match", "danger");
      setformdata({ ...formdata, confirmpassword: "" });
    } else if (password.length < 6) {
      setalert("password should be above or equals 6", "danger");
      setformdata({ ...formdata, confirmpassword: "" });
    } else {
      mystyle = {
        display: "none"
      };
      setOpen(false);
      updateuser({ username, gender, job, birthdate, email, password });
      console.log("congratulations");
    }
  };

  return (
    <Fragment>
      <Tabbar value={1} />

      <Typography
        variant="h3"
        style={{ marginTop: 100, marginLeft: 50, fontFamily: "italic" }}
      >
        Profile
      </Typography>

      <Grid container spacing={5} style={{ marginLeft: 20, marginTop: 50 }}>
        <Grid item xs={11}>
          <Paper elevation={5} style={{ borderRadius: 10, height: 400 }}>
            <div>
              <Grid container>
                <Grid item xs={5}>
                  <AccountCircle
                    style={{ width: 250, height: 300, marginLeft: 100 }}
                  />
                  <br /> <br /> <br /> <br /> <br />
                  {/* <input accept="image/*" id="icon-button-file" type="file" />
                  <label htmlFor="icon-button-file"> */}
                  {/* <IconButton color="primary" aria-label="upload picture" component="span" style={{}}>
                                        <PhotoCamera/>
                                           </IconButton>  */}
                  {/* </label>
                  <Button
                    variant="contained"
                    color="primary"
                    component="span"
                    startIcon={<CloudUploadIcon />}
                  >
                    Upload
                  </Button>
                  <br /> */}
                </Grid>

                <Grid item xs={5}>
                  <ul
                    style={{ listStyleType: "none", fontSize: 20, margin: 50 }}
                  >
                    <li style={listyle}>
                      Username: {"    "} {!loading ? user.username : null}
                    </li>
                    <li style={listyle}>
                      Sex: {!loading ? user.gender : null}
                    </li>
                    <li style={listyle}>
                      Age:{" "}
                      {!loading
                        ? new Date(Date.now()).getFullYear() -
                          new Date(user.birthdate).getFullYear()
                        : null}
                    </li>
                    <li style={listyle}>Job: {!loading ? user.job : null}</li>
                    <li style={listyle}>
                      Email: {!loading ? user.email : null}
                    </li>
                  </ul>

                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ margin: 50 }}
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClickOpen}
                  >
                    edit profile
                    <EditIcon style={{ marginLeft: 20 }} />
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={5} style={{ marginLeft: 20, marginTop: 50 }}>
        <Grid item xs={10}>
          <Paper elevation={5} style={mystyle}>
            <div
              style={{
                height: 900,
                borderRadius: 10,
                overflow: "auto",
                marginLeft: 200
              }}
            >
              <form onSubmit={handlesubmit}>
                <Typography variant="h6" style={typostyles}>
                  Username{" "}
                  <Fab
                    color="secondary"
                    aria-label="edit"
                    style={fabstyles}
                    onClick={handleuname}
                  >
                    <EditIcon />
                  </Fab>{" "}
                </Typography>{" "}
                <div style={unamestyle}>
                  <TextField
                    name="username"
                    label="username"
                    style={styles}
                    onChange={e => changer(e)}
                    value={username}
                  />
                  <Button
                    //color="primary"
                    variant="contained"
                    type="submit"
                    style={{
                      marginTop: 30,
                      marginLeft: 50,
                      width: 70,
                      backgroundColor: "green",
                      color: "white"
                    }}
                  >
                    Update
                  </Button>
                </div>
                <Typography variant="h6" style={typostyles}>
                  Gender{" "}
                  <Fab
                    color="secondary"
                    aria-label="edit"
                    style={fabstyles}
                    onClick={handlegender}
                  >
                    <EditIcon />
                  </Fab>{" "}
                </Typography>{" "}
                <div style={genderstyle}>
                  <FormControl component="fieldset">
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

                  <Button
                    //color="primary"
                    variant="contained"
                    type="submit"
                    style={{
                      marginTop: 30,
                      marginLeft: 50,
                      width: 70,
                      backgroundColor: "green",
                      color: "white"
                    }}
                  >
                    Update
                  </Button>
                </div>
                <Typography variant="h6" style={typostyles}>
                  job{" "}
                  <Fab
                    color="secondary"
                    aria-label="edit"
                    style={fabstyles}
                    onClick={handlejob}
                  >
                    <EditIcon />
                  </Fab>{" "}
                </Typography>{" "}
                <div style={jobstyle}>
                  <Select
                    //style={{ width: 500, marginLeft: 30, marginTop: -10 }}
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
                  <Button
                    //color="primary"
                    variant="contained"
                    type="submit"
                    style={{
                      marginTop: 30,
                      marginLeft: 50,
                      width: 70,
                      backgroundColor: "green",
                      color: "white"
                    }}
                  >
                    Update
                  </Button>
                </div>
                <Typography variant="h6" style={typostyles}>
                  Birthdate{" "}
                  <Fab
                    color="secondary"
                    aria-label="edit"
                    style={fabstyles}
                    onClick={handlebirth}
                  >
                    <EditIcon />
                  </Fab>{" "}
                </Typography>{" "}
                <div style={birthstyle}>
                  <input
                    type="date"
                    name="birthdate"
                    value={birthdate}
                    style={styles}
                    onChange={e => changer(e)}
                  />
                  <Button
                    //color="primary"
                    variant="contained"
                    type="submit"
                    style={{
                      marginTop: 30,
                      marginLeft: 50,
                      width: 70,
                      backgroundColor: "green",
                      color: "white"
                    }}
                  >
                    Update
                  </Button>
                </div>
                <Typography variant="h6" style={typostyles}>
                  Email{" "}
                  <Fab
                    color="secondary"
                    aria-label="edit"
                    style={fabstyles}
                    onClick={handleemail}
                  >
                    <EditIcon />
                  </Fab>{" "}
                </Typography>
                <div style={emailstyle}>
                  <TextField
                    name="email"
                    type="email"
                    label="email"
                    style={styles}
                    value={email}
                    onChange={e => changer(e)}
                  />
                  <Button
                    //color="primary"
                    variant="contained"
                    type="submit"
                    style={{
                      marginTop: 30,
                      marginLeft: 50,
                      width: 70,
                      backgroundColor: "green",
                      color: "white"
                    }}
                  >
                    Update
                  </Button>
                </div>
              </form>

              <form onSubmit={handlepasssubmit}>
                <Typography variant="h6" style={typostyles}>
                  Password{" "}
                  <Fab
                    color="secondary"
                    aria-label="edit"
                    style={fabstyles}
                    onClick={handlepass}
                  >
                    <EditIcon />
                  </Fab>{" "}
                </Typography>
                <div style={passstyle}>
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
                    //color="primary"
                    variant="contained"
                    type="submit"
                    style={{
                      marginTop: 30,
                      marginLeft: 50,
                      width: 70,
                      backgroundColor: "green",
                      color: "white"
                    }}
                  >
                    Update
                  </Button>
                </div>
              </form>
            </div>
          </Paper>
        </Grid>
      </Grid>

      <Alert />

      <div style={{ marginTop: 300 }}>
        <Footer />
      </div>
    </Fragment>
  );
};
Profile.propTypes = {
  // user: PropTypes.object.isRequired,
  updateuser: PropTypes.func.isRequired,
  setalert: PropTypes.func.isRequired,
  getmysurvey: PropTypes.func.isRequired,
  loaduser: PropTypes.func.isRequired,
  getallchoices: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.auth.user,
  loading: state.auth.loading,
  mysurvey: state.survey.mysurvey,
  allchoices: state.survey.allchoices
});

export default connect(mapStateToProps, {
  updateuser,
  setalert,
  getmysurvey,
  getallchoices,
  loaduser
})(Profile);
