import React from "react";

import AppContainer from "./../layout/common/AppContainer/AppContainer";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';

import Routes from "./Routes.json";
import Landing from "layout/components/landing";
import Chat from "layout/components/chat";
import SelfHelp from "layout/components/self-help";
import Support from "layout/components/support";
import TaskList from "layout/components/task-list";

export default function Router() {
  const currentHistory = createBrowserHistory();
  setTimeout(() => {
    currentHistory.push("/");
  }, 1000);
  return (
    <AppContainer>
      <BrowserRouter>
        <Switch>
          <Route path={Routes.LANDING} component={Landing} exact />
          <Route path={Routes.CHAT} component={Chat} exact />
          <Route path={Routes.SELF_HELP} component={SelfHelp} exact />
          <Route path={Routes.SUPPORT} component={Support} exact />
          <Route path={Routes.TASKLIST} component={TaskList} exact />
        </Switch>
      </BrowserRouter>
    </AppContainer>
  );
}
