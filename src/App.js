import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import {Navbar} from "./components/Navbar";
import {Home} from "./containers/Home";
import {Profile} from "./containers/Profile";
import {About} from "./containers/About";
import {ErrorPage} from "./containers/ErrorPage";
import {Alert} from "./components/Alert";
import {AlertState} from "./context/alert/AlertContext";
import {GithubState} from "./context/github/GithubContext";

function App() {
    const alertState = {
        type: 'secondary',
        text: 'some text'}
  return (
      <GithubState>
          <AlertState>
              <BrowserRouter>
                  <Navbar/>
                  <div className={"container pt-4"}>
                      <Alert alert={alertState}/>
                      <Switch>
                          <Route path={"/"} exact={true} component={Home} />
                          <Route path={"/about"} component={About} />
                          <Route path={"/profile/:name"} component={Profile} />
                          <Route path={""} component={ErrorPage} />
                      </Switch>
                  </div>
              </BrowserRouter>
          </AlertState>
      </GithubState>
  );
}

export default App;
