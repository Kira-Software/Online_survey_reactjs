import React, { Fragment, useState } from "react";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

const Headerhome = ({ login }) => {
  const [formdata, setformdata] = useState({
    username: "",
    password: ""
  });

  const { username, password } = formdata;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changer = e =>
    setformdata({ ...formdata, [e.target.name]: e.target.value });

  const handlesubmit = async event => {
    event.preventDefault();
    console.log("SUCCESS");
    login(username, password);
  };

  return (
    <Fragment>
      <AppBar
        style={{ position: "fixed",backgroundColor: "black" }}
        // style={{  }}
      >
        <Toolbar>
          <Typography variant="h3" style={{ marginLeft: 30, flexGrow: 1 }}>
            Survey site
          </Typography>

          <div>
            <br />

            <Button
              color="inherit"
              variant="outlined"
              style={{ marginRight: 10 }}
              onClick={handleClickOpen}
            >
              <Link to="/login" style={{ color: "white" }}>
                {" "}
                Login
              </Link>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

Headerhome.propTypes = {
  login: PropTypes.func.isRequired,
  isauthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isauthenticated: state.auth.isauthenticated
});

export default connect(mapStateToProps, { login })(Headerhome);
