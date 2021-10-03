import React from "react";
import { Container } from "@material-ui/core";
// import useStyles from "./styles";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { Switch, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";

const App = () => {
  const state = null;

  return (
    <Container maxWidth="lg">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
    </Container>
  );
};

export default App;
