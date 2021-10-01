import React from "react";

import AppContainer from "./../layout/common/AppContainer/AppContainer";
import Planner from "layout/components/planner";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Routes from "./Routes.json";

export default function Router() {
  return (
    <AppContainer>
      <BrowserRouter>
        <Switch>
          <Route path={Routes.LANDING_ROUTE} component={Planner} exact />
          <Route path={Routes.CHAT} component={()=><React.Fragment></React.Fragment>} exact />
          <Route path={Routes.SELF_HELP} component={()=><React.Fragment></React.Fragment>} exact />
          <Route path={Routes.SUPPORT} component={()=><React.Fragment></React.Fragment>} exact />
          <Route path={Routes.TASKLIST} component={()=><React.Fragment></React.Fragment>} exact />
        </Switch>
      </BrowserRouter>
    </AppContainer>
  );
}
