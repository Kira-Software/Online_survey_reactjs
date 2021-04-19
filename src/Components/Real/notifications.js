import React, { Fragment, useEffect } from "react";
import Tabbar from "../Header/tabs";
import Footer from "../Footer/footer";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getsurveytofill } from "../../actions/auth";
import { getallchoices } from "../../actions/auth";
import { loaduser } from "../../actions/auth";

import { addchoice } from "../../actions/auth";
import Alert from "../../layout/alert";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Grid } from "@material-ui/core";

const Notifications = ({
  fillsurvey,
  getsurveytofill,
  addchoice,
  loading,
  getallchoices,
  allchoices,
  user,
}) => {
  useEffect(() => {
    getsurveytofill();
    getallchoices();
  }, []);

  let [isdisabled, setisdisabled] = React.useState(false);

  let [myanswers, setmyanswers] = React.useState(null);
  let temparr = [];

  const [expanded, setExpanded] = React.useState(false);
  const [theqid, settheqid] = React.useState(null);

  ///////////////////////////////////////////////////////////////////////

  const choicechanger = (e, title) => {
    fillsurvey.map((item1, idx) => {
      if (title == item1.title) {
        return item1.myquestion.map((item2, idx2) => {
          return item2.map((item3, idx3) => {
            if (e.target.value == item3) {
              let copyarr = [...myanswers];
              copyarr[idx2][0] = item2[0];
              copyarr[idx2][1] = e.target.value;
              return setmyanswers(copyarr);
            }
          });
        });
      }
    });
  };
  ///////////////////////////////////////////////////////////////////////

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    getallchoices();

    if (isExpanded == true) {
      setmyanswers([]);
      setisdisabled(false);

      fillsurvey.map((item) => {
        if (panel === item.title) {
          settheqid(item._id);
          let i = null;
          for (i = 0; i < item.myquestion.length; i++) {
            temparr.push([]);
          }

          {
            allchoices.map((itemc) => {
              if (itemc.uname === user.username && item._id === itemc.qid) {
                return setisdisabled(true);
              }
            });
          }

          return setmyanswers(temparr);
        }
      });
    } else {
      setmyanswers([]);
    }
  };

  const handlesubmit = async (event) => {
    event.preventDefault();
    addchoice({ theqid, myanswers });
    setisdisabled(true);
  };

  let submitstyle = null;
  if (isdisabled === false) {
    submitstyle = {
      color: "white",
      backgroundColor: "green",
      marginLeft: "90%",
    };
  } else {
    submitstyle = {
      color: "black",
      backgroundColor: "lightgray",
      marginLeft: "85%",
    };
  }

  return (
    <Fragment>
      <Tabbar value={2} />
      <Typography
        variant="h5"
        style={{
          marginTop: 100,
          marginLeft: "5%",
          fontStyle: "italic",
        }}
      >
        {" "}
        {fillsurvey.length > 0 ? (
          "Take your time to fill these surveys"
        ) : loading ? (
          "Loading..."
        ) : (
          <span style={{ color: "red" }}>No notifications still now</span>
        )}
      </Typography>{" "}
      {loading ? (
        <CircularProgress
          disableShrink
          style={{ marginTop: 200, marginLeft: 500 }}
        />
      ) : (
        <div
          style={{
            margin: 100,
            borderStyle: "dashed",
            borderWidth: 1,
            borderColor: "brown",
          }}
        >
          <form onSubmit={handlesubmit}>
            {fillsurvey.map((item, cindex) => {
              let mytime = new Date(item.posteddate);
              return (
                <Grid container>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <ExpansionPanel
                      expanded={expanded === item.title}
                      onChange={handleChange(item.title)}
                      key={cindex}
                    >
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography
                          style={{ textTransform: "capitalize", color: "blue" }}
                        >
                          {item.title}{" "}
                          <span style={{ marginLeft: 500 }}>
                            Posted date:{" "}
                            {mytime.getFullYear() +
                              "-" +
                              (mytime.getMonth() + 1) +
                              "-" +
                              mytime.getDate() +
                              ":" +
                              mytime.getHours() +
                              "-" +
                              mytime.getMinutes() +
                              "-" +
                              mytime.getSeconds()}
                          </span>{" "}
                        </Typography>
                      </ExpansionPanelSummary>

                      {item.myquestion.map((item2, idx) => {
                        return (
                          <div key={idx}>
                            <FormControl
                              component="fieldset"
                              key={idx}
                              style={{ width: "100%" }}
                              key={idx}
                            >
                              <RadioGroup
                                aria-label="choice"
                                name={`choice${cindex}1`}
                                // value={myanswers[cindex][1]}
                                style={{ display: "inline" }}
                                required
                                onChange={(e) => choicechanger(e, item.title)}
                                required
                              >
                                {item2.map((item3, index) => {
                                  return (
                                    <ExpansionPanelDetails key={index}>
                                      {index === 0 ? (
                                        <div style={{}} key={index}>
                                          <span style={{ fontSize: 18 }}>
                                            Question{idx + 1}.{" "}
                                          </span>
                                          {item3}
                                        </div>
                                      ) : (
                                        <span
                                          style={{ marginLeft: 100 }}
                                          key={index}
                                        >
                                          <FormControlLabel
                                            value={item3}
                                            control={<Radio />}
                                            label={item3}
                                            required
                                          />
                                        </span>
                                      )}
                                    </ExpansionPanelDetails>
                                  );
                                })}
                              </RadioGroup>
                            </FormControl>
                          </div>
                        );
                      })}
                      <Alert />
                      <br />

                      <Button
                        type="submit"
                        style={submitstyle}
                        disabled={isdisabled}
                      >
                        {" "}
                        {isdisabled ? "Submitted" : "Submit"}
                      </Button>
                    </ExpansionPanel>
                  </Grid>
                </Grid>
              );
            })}
          </form>
        </div>
      )}
      <div style={{ marginTop: 300 }}>
        <Footer />
      </div>
    </Fragment>
  );
};

Notifications.propTypes = {
  fillsurvey: PropTypes.array.isRequired,
  getsurveytofill: PropTypes.func.isRequired,
  addchoice: PropTypes.func.isRequired,
  allchoices: PropTypes.array.isRequired,
  getallchoices: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  fillsurvey: state.survey.fillsurvey,
  loading: state.survey.loading,
  allchoices: state.survey.allchoices,
  user: state.auth.user,
  isauthenticated: state.auth.isauthenticated,
});

export default connect(mapStateToProps, {
  getsurveytofill,
  addchoice,
  getallchoices,
  loaduser,
})(Notifications);
