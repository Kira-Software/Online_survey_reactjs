import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Homepage from "./Components/Homepage/homepage";
import store from "./store";
import { Provider } from "react-redux";
import { loaduser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loaduser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Homepage />
      </Router>
    </Provider>
  );
};

export default App;
