import React, { Fragment, useEffect } from "react";
import Tabbar from "../Header/tabs";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getmysurvey } from "../../actions/auth";
import { getallchoices } from "../../actions/auth";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Surveyreport = ({
  getmysurvey,
  mysurvey,
  loading,
  getallchoices,
  allchoices
}) => {
  useEffect(() => {
    getmysurvey();
    getallchoices();
  }, []);

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // let myarray = ["a", "a", "d", "f", "s", "a", "v", "g", "g", "d"];
  // let counts = {};
  // myarray.forEach(function(element) {
  //   counts[element] = (counts[element] || 0) + 1;
  // });
  // for (var element in counts) {
  //   console.log(element + "=" + counts[element]);
  // }

  const breaker = () => {
    return (
      <div>
        <br />
        <br />
        <br />
      </div>
    );
  };

  return (
    <Fragment>
      <Tabbar value={0} />
      <Typography
        variant="h5"
        style={{
          marginTop: 100,
          marginLeft: "5%",
          fontStyle: "italic"
        }}
      >
        {" "}
        {mysurvey.length > 0 ? (
          "Collected survey data from the users"
        ) : (
          <span style={{ color: "red" }}>No survey still now</span>
        )}
      </Typography>{" "}
      {loading ? (
        <CircularProgress
          disableShrink
          style={{ marginTop: 200, marginLeft: 500 }}
        />
      ) : (
        <div style={{ margin: 100 }}>
          {mysurvey.map((item, idx) => {
            let please = [[]];
            let counts = {};
            let a = 0;

            return (
              <ExpansionPanel
                expanded={expanded === item.title}
                onChange={handleChange(item.title)}
                key={idx}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    style={{ textTransform: "capitalize", color: "blue" }}
                  >
                    {item.title}
                  </Typography>
                </ExpansionPanelSummary>

                {allchoices.map((citem, idx2) => {
                  let qnum = 1;

                  if (citem.qid === item._id) {
                    a++;
                    return (
                      <div style={{ marginLeft: 100 }} key={idx2}>
                        <Typography style={{ margin: 20, color: "red" }}>
                          user #{a}
                        </Typography>

                        {citem.mychoice.map((citem2, index2) => (
                          <div style={{ marginBottom: 50 }} key={index2}>
                            {citem2.map((citem3, idx3) => {
                              let st = null;
                              let qq = null;
                              if (idx3 === 1) {
                                st = { color: "green", margin: 20 };
                                please[index2].push(citem3);
                                if (please.length < citem.mychoice.length) {
                                  please.push([]);
                                }
                              } else {
                                qq = "Q" + qnum + ".   ";
                                qnum++;
                              }
                              return (
                                <span style={st} key={idx3}>
                                  {qq}
                                  {citem3}
                                </span>
                              );
                            })}
                          </div>
                        ))}
                        <br />
                        <br />
                      </div>
                    );
                  }
                })}

                <Typography variant="h3">Final Report</Typography>
                <br />
                <br />

                {please.map((pitem, index) => {
                  let counts = {};
                  let temp = `Q ${index + 1}.     `;
                  let temp2 = "       ";
                  let total = 0;
                  pitem.map(element => {
                    counts[element] = (counts[element] || 0) + 1;
                  });

                  for (var element in counts) {
                    total += counts[element];
                  }

                  for (var element in counts) {
                    temp += element + "  =   " + counts[element] + " ";
                    temp2 +=
                      element +
                      "  =   " +
                      ((counts[element] / total) * 100).toFixed(2) +
                      "% ";
                  }

                  return (
                    <div key={index} style={{ marginLeft: 50 }}>
                      <span
                        style={{
                          fontWeight: "bold",
                          fontStyle: "italic",
                          color: "brown"
                        }}
                      >
                        {"Numerical analysis ==>"}
                      </span>
                      {temp}
                      <span
                        style={{
                          fontWeight: "bold",
                          fontStyle: "italic",
                          color: "brown"
                        }}
                      >
                        {"Percentage analysis ==>"}
                      </span>

                      {temp2}
                      <br />
                      <br />
                      <br />
                    </div>
                  );
                })}
              </ExpansionPanel>
            );
          })}
        </div>
      )}
    </Fragment>
  );
};

Surveyreport.propTypes = {
  getmysurvey: PropTypes.func.isRequired,
  getallchoices: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  mysurvey: state.survey.mysurvey,
  allchoices: state.survey.allchoices,
  loading: state.survey.loading
});

export default connect(mapStateToProps, { getmysurvey, getallchoices })(
  Surveyreport
);
