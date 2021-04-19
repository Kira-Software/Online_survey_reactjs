import React, { Fragment, useState, useEffect } from "react";
import Tabbar from "../Header/tabs";
import { Paper, Button, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import DeleteIcon from "@material-ui/icons/Delete";
import ReportIcon from "@material-ui/icons/Report";
import Footer from "../Footer/footer";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { MenuItem, Select } from "@material-ui/core";
import { connect } from "react-redux";
import { addsurvey } from "../../actions/auth";
import { getmysurvey } from "../../actions/auth";
import { getallchoices } from "../../actions/auth";
import { loaduser } from "../../actions/auth";
import PropTypes from "prop-types";
import Alert from "../../layout/alert";
import { Link } from "react-router-dom";

const Survey = ({
  addsurvey,
  getallchoices,
  getmysurvey,
  mysurvey,
  allchoices,
  loaduser,
  user
}) => {
  useEffect(() => {
    loaduser();
    getmysurvey();
    getallchoices();
  }, []);

  const [questions, setquestions] = React.useState([""]);
  const [formdata, setformdata] = useState({
    title: "",
    minage: "",
    maxage: "",
    job: "",
    gender: "",
    allquestions: [],
    posteddate: Date.now()
  });

  const {
    title,
    minage,
    maxage,
    job,
    gender,
    allquestions,
    posteddate
  } = formdata;

  ////////////////////////////////////////////////////////////////////////////

  let [myquestion, setmyquestion] = React.useState([[]]);

  const qupdate = e => {
    let i = null;
    let j = null;
    for (i = 0; i < questions.length; i++) {
      for (j = 0; j < 6; j++) {
        //console.log(`questions${i}${j}`);
        if (e.target.name === `questions${i}${j}`) {
          myquestion[i][j] = e.target.value;
        }
      }
    }
  };
  //////////////////////////////////////////////////////////////////////////////

  const changer = e => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
    // console.log("the value of formdata is", formdata);
  };

  const handlesubmit = async event => {
    event.preventDefault();
    console.log("inside the survey submit method");
    console.log("the value of temp here is", myquestion);
    addsurvey({ title, minage, maxage, job, gender, myquestion, posteddate });
    console.log("congratulations to the new survey");
  };

  //const [choices, setchoices] = React.useState([]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const handleClickClose = () => {
    setOpen(false);
    // getmysurvey();
  };

  let mystyle = null;
  open === true
    ? (mystyle = {
        display: "block"
      })
    : (mystyle = {
        display: "none"
      });

  const addquestion = () => {
    //setchoices([]);
    setquestions([...questions, ""]);
    setmyquestion([...myquestion, []]);
  };

  const deletequestion = () => {
    //setchoices([]);
    let tempq = [...questions];
    tempq.pop();

    let myq = [...myquestion];
    myq.pop();

    setquestions(tempq);
    setmyquestion(myq);
  };

  const style = {
    width: 150,
    marginLeft: 50,
    borderRadius: 10,
    marginBottom: 20,
    display: "inline"
  };
  let answeres = 0;

  return (
    <Fragment>
      <Tabbar value={0} />

      <Paper style={{ height: 200, marginTop: 100 }} elevation={3}>
        {allchoices.map(item => {
          if (item.uname === user.username) {
            answeres++;
          }
        })}
        <ul
          style={{
            fontStyle: "italic",
            color: "brown",
            fontSize: 20,
            lineHeight: 3,
            marginLeft: 100
          }}
        >
          <li>You have posted {mysurvey.length} surveys</li>
          <li>
            You responded for
            {answeres} surveys
          </li>
        </ul>
      </Paper>

      <form onSubmit={event => handlesubmit(event)}>
        <Paper
          elevation={10}
          style={{ margin: 20, height: 900, overflow: "auto" }}
        >
          <Button
            color="inherit"
            variant="outlined"
            startIcon={<AddIcon />}
            style={{ margin: 50, borderRadius: 10 }}
            onClick={handleClickOpen}
          >
            Create new survey{" "}
          </Button>

          <Link
            to="/surveypreview"
            style={{ color: "black", textDecoration: "none" }}
          >
            {" "}
            <Button
              color="inherit"
              variant="outlined"
              style={{
                margin: 0,
                marginLeft: 150,
                borderRadius: 10,
                width: 200
              }}
              onClick={handleClickClose}
            >
              My surveys
            </Button>{" "}
          </Link>

          <Link
            to="/surveyreport"
            style={{ color: "black", textDecoration: "none" }}
          >
            <Button
              color="inherit"
              variant="outlined"
              startIcon={<ReportIcon />}
              style={{ margin: 50, marginLeft: 150, borderRadius: 10 }}
              onClick={handleClickClose}
            >
              Survey report{" "}
            </Button>
          </Link>

          {/* /////////////////////////////////////////////////////////////////////////////// */}

          <div style={mystyle}>
            <TextField
              autoFocus
              name="title"
              margin="dense"
              label="Enter survey title here"
              type="text"
              fullWidth
              required
              style={{ marginBottom: 50, width: 400 }}
              onChange={e => changer(e)}
              value={title}
            />

            <br></br>
            <hr></hr>

            {questions.map((question, qindex) => {
              return (
                <div key={qindex}>
                  <label style={{ marginBottom: 50 }}>
                    question {qindex + 1}
                  </label>
                  <br></br>
                  <br></br>
                  <br></br>
                  <TextareaAutosize
                    onChange={e => qupdate(e)}
                    name={`questions${qindex}0`}
                    rowsMin={2}
                    placeholder="enter your questions here"
                    required
                    style={{
                      width: 500,
                      marginLeft: 50,
                      borderRadius: 10,
                      marginBottom: 50
                    }}
                  />

                  <br></br>

                  <div style={{ display: "inline" }}>
                    <TextareaAutosize
                      name={`questions${qindex}1`}
                      rowsMin={2}
                      placeholder="enter your choice here * (requierd)"
                      style={style}
                      onChange={e => qupdate(e)}
                      required
                    />
                    <TextareaAutosize
                      name={`questions${qindex}2`}
                      rowsMin={2}
                      placeholder="enter your choice here  * (requierd)"
                      style={style}
                      onChange={e => qupdate(e)}
                      required
                    />
                    <TextareaAutosize
                      name={`questions${qindex}3`}
                      rowsMin={2}
                      placeholder="enter your choice here (optional)"
                      style={style}
                      onChange={e => qupdate(e)}
                    />
                    <TextareaAutosize
                      name={`questions${qindex}4`}
                      rowsMin={2}
                      placeholder="enter your choice here (optional)"
                      style={style}
                      onChange={e => qupdate(e)}
                    />
                    <TextareaAutosize
                      name={`questions${qindex}5`}
                      rowsMin={2}
                      placeholder="enter your choice here (optional)"
                      style={style}
                      onChange={e => qupdate(e)}
                    />
                  </div>
                </div>
              );
            })}

            {questions.length > 0 ? (
              <Button
                variant="outlined"
                color="secondary"
                style={{ marginLeft: 50 }}
                onClick={deletequestion}
              >
                Delete <DeleteIcon style={{ marginLeft: 20 }} />
              </Button>
            ) : null}

            <Button
              variant="outlined"
              color="primary"
              style={{ margin: 20, width: 200, borderRadius: 10 }}
              onClick={e => addquestion(e)}
            >
              Add Question
              <AddCircleIcon color="secondary" />
            </Button>
          </div>
        </Paper>

        {/* ////////////////////////////////////////////////////////////////////////// */}

        <div style={mystyle}>
          <Paper
            elevation={10}
            style={{ margin: 20, height: 500, overflow: "auto" }}
          >
            <Typography style={{ fontWeight: "bold" }} variant="h4">
              Survey specification
            </Typography>

            <TextField
              margin="dense"
              name="maxage"
              label="Maximum age"
              type="number"
              style={{ margin: 50 }}
              required
              onChange={e => changer(e)}
              value={maxage}
            />
            <TextField
              margin="dense"
              name="minage"
              label="Minimum age"
              type="number"
              style={{ margin: 50 }}
              required
              onChange={e => changer(e)}
              value={minage}
            />
            <FormLabel style={{ marginTop: 50, marginLeft: 70 }}>Job</FormLabel>
            <Select
              style={{ margin: 50, width: 200 }}
              name="job"
              required
              // onChange={props.handleSelectChanging}
              onChange={e => changer(e)}
              value={job}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Software Engineer"}>Software Engineer</MenuItem>
              <MenuItem value={"Doctor"}>Doctor</MenuItem>
              <MenuItem value={"Teacher"}>Teacher</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
            </Select>

            <FormControl component="fieldset">
              <FormLabel style={{ marginTop: 50, marginLeft: 40 }}>
                Gender
              </FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender"
                value={gender}
                style={{ display: "inline" }}
                required
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
                <FormControlLabel
                  value="both"
                  control={<Radio />}
                  label="Both"
                />
              </RadioGroup>
            </FormControl>

            <Button
              variant="outlined"
              color="primary"
              type="submit"
              style={{
                marginLeft: "40%",
                marginTop: 70,
                width: 200,
                borderRadius: 10
              }}
              // onClick={handleClickOpen}
            >
              Finish <DoneAllIcon style={{ marginLeft: 20 }} />
            </Button>
            <Alert />
          </Paper>
        </div>
      </form>

      {/* ////////////////////////////////////////////////////////////////////////// */}

      <div style={{ marginTop: 300 }}>
        <Footer />
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  alert: state.alert,
  mysurvey: state.survey.mysurvey,
  allchoices: state.survey.allchoices
});

Survey.propTypes = {
  addsurvey: PropTypes.func.isRequired,
  getallchoices: PropTypes.func.isRequired,
  getmysurvey: PropTypes.func.isRequired,
  loaduser: PropTypes.func.isRequired,
  alert: PropTypes.array.isRequired
};

export default connect(mapStateToProps, {
  addsurvey,
  getallchoices,
  getmysurvey,
  loaduser
})(Survey);
