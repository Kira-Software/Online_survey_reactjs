import React, { Fragment, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Tabbar from "../Header/tabs";
import Footer from "../Footer/footer";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getmysurvey } from "../../actions/auth";
import { deletemysurvey } from "../../actions/auth";

import { Paper, Typography, Grid, Button } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import DeleteIcon from "@material-ui/icons/Delete";

const Surveypreview = ({ getmysurvey, deletemysurvey, mysurvey, loading }) => {
  useEffect(() => {
    getmysurvey();
  }, []);

  const deletesurvey = id => {
    console.log("inside of the deleting survey location ");
    deletemysurvey(id);
  };

  return (
    <Fragment>
      <Tabbar value={0} />
      <Grid position="static" container style={{minHeight: "100vh"}}>
        <Grid item xs={10}>
          {" "}
          <br />
          <br />
          <br />
          <Typography
            variant="h5"
            style={{
              fontFamily: "algerian",
              marginLeft: "25%"
            }}
          >
            {" "}
            {mysurvey.length > 0 ? (
              "Here is your Previous posted surveys"
            ) : loading ? (
              "Loding..."
            ) : (
              <span style={{ color: "red" }}>
                You haven't posted any survey yet
              </span>
            )}
          </Typography>{" "}
          <br />
          <br />
          <br />
          {loading ? (
            <CircularProgress
              disableShrink
              style={{ marginTop: 200, marginLeft: 500 }}
            />
          ) : (
            <div>
              {mysurvey.map((item1, indx) => {
                return (
                  <Paper
                    key={indx}
                    elevation={10}
                    style={{
                      marginBottom: 100,
                      backgroundColor: "lightgray",
                      marginLeft: 100,
                      height: 300,
                      overflow: "auto",
                      width: "100%"
                    }}
                  >
                    <Typography
                      variant="h4"
                      style={{ textTransform: "capitalize" }}
                    >
                      {item1.title}
                    </Typography>
                    <br /> Minimum age :{item1.minage}
                    <br /> Maximum age : {item1.maxage}
                    <br /> Survey for : {item1.job}s who are {item1.gender}
                    <br /> Posted Date : {item1.posteddate} <br />
                    <br />
                    {item1.myquestion.map((item2, idx) => {
                      return (
                        <div key={idx}>
                          <RadioGroup
                            aria-label="choice"
                            style={{ display: "inline" }}
                            required
                          >
                            {item2.map((item3, index) => {
                              return index === 0 ? (
                                <div style={{}} key={index}>
                                  <span style={{ fontSize: 18 }}>
                                    Question{idx + 1}.{" "}
                                  </span>
                                  {item3}
                                </div>
                              ) : (
                                <span style={{ marginLeft: 100 }} key={index}>
                                  <FormControlLabel
                                    value={item3}
                                    control={<Radio />}
                                    label={item3}
                                  />
                                </span>
                              );
                            })}
                            <br />
                          </RadioGroup>
                        </div>
                      );
                    })}
                    <br />
                    <br />
                    <Button
                      variant="outlined"
                      color="secondary"
                      style={{ marginLeft: "80%" }}
                      onClick={() => deletesurvey(item1._id)}
                    >
                      Delete <DeleteIcon style={{ marginLeft: 20 }} />
                    </Button>
                    <hr />
                    <br />
                    <br />
                    <br />
                  </Paper>
                );
              })}
            </div>
          )}
        </Grid>
      </Grid>

      <Footer />
    </Fragment>
  );
};

Surveypreview.propTypes = {
  getmysurvey: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  mysurvey: state.survey.mysurvey,
  loading: state.survey.loading
});

export default connect(mapStateToProps, { getmysurvey, deletemysurvey })(
  Surveypreview
);
