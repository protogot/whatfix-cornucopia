import React from "react";
import { GridContainer, GridItem } from "layout/common/Grid/GridContainer";

import "./index.scss";
import Body from "layout/common/Body/Body";

import Routes from "../../../routes/Routes.json";

type Props = {};
type State = {
  tabs: Array<Tab>
};
type Tab = {
  URL: string;
  active: boolean;
  type: TabTypes;
  label: string;
}

enum TabTypes {
  chat,
  selfHelp,
  support,
  taskList
} 

const defaultTabsConfig = [{
  URL: Routes.CHAT,
  active: false,
  type: TabTypes.chat,
  label: "Chat"
},{
  URL: Routes.SELF_HELP,
  active: false,
  type: TabTypes.selfHelp,
  label: "Self Help"
},{
  URL: Routes.SUPPORT,
  active: false,
  type: TabTypes.support,
  label: "Support"
},{
  URL: Routes.TASKLIST,
  active: false,
  type: TabTypes.taskList,
  label: "Task List"
}]

class Landing extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      tabs: {...defaultTabsConfig}
    };
  }

  public handleTabRedirect(tabInfo: Tab){
    console.log("Tab Clicked", tabInfo);
  }

  public render() {
    return (
      <GridContainer className="page-cornucopia-landing">
        {/* SEARCH WILL COME HERE - COMMON - Add all the elements inside <Body>...</Body> */}
        <Body>
          <GridContainer className="tabs-list">
            {
              this.state.tabs.map((tab: Tab) => (
                <GridItem xs={12} onClick={() => this.handleTabRedirect(tab)}>{tab.label}</GridItem>
              ))
            }
          </GridContainer>
        </Body>
      </GridContainer>
    );
  }
}

export default Landing;
