import React from "react";

import { Switch, Route, useHistory } from "react-router-dom";

import Header from "./../Header/Header";
import Main from "./../Main/Main";
import Form from "./../Form/Form";
import FavoriteContacts from "./../FavoriteContacts/FavoriteContacts";

import "./App.scss";

const App = () => {
  let history = useHistory();

  React.useEffect(() => {
    history.push("/");
  }, [history]);

  return (
    <div className="app">
      <Header />

      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/form">
          <Form />
        </Route>
        <Route exact path="/favorite">
          <FavoriteContacts />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
