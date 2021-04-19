import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const privateroute = ({
  component: Component,
  auth: { isauthenticated, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      !isauthenticated && !loading ? (
        <Redirect to="/" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

privateroute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(privateroute);
