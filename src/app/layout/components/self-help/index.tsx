import React from "react";
import { GridContainer, GridItem } from "layout/common/Grid/GridContainer";

import "./index.scss";
import BackButton from "layout/common/BackButton";
import FlowListItem from "./FlowListItem";
import { CALLWINDOW } from "../../../helpers/GWTConnection";


type Props = {
  history?: any;
};

type State = {
  allSHContent: any;
};

class SelfHelp extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      allSHContent: []
    };
  }

  public shContentCallback = (result: any) => {
    this.setState({
      allSHContent: result
    })
  }

  public componentDidMount = () => {
    CALLWINDOW("getAllSHContent",this.shContentCallback);
    // (window as any)["wfxCornucopiaActions"].getAllSHContent(this.shContentCallback);
  }


  public getFlowsToDisplay = () => {
    const allContent: any[] = this.state.allSHContent;
    return (
      allContent.map((content) => {
        if (content.type === "flow") {
          return (
            <GridContainer className="sh-item">
              <FlowListItem
                styleClass="sub-sh-item"
                flowItem={content}
              />
            </GridContainer>
          );
        }
      })
    );
  }

  render() {
    return (
      <GridContainer className="page-cornucopia-self-help">
        {/* SEARCH WILL COME HERE - COMMON - Add all the elements inside <Body>...</Body> */}
        <BackButton history={this.props.history} />
        <GridContainer className="sh-items-list">
          {this.getFlowsToDisplay()}
        </GridContainer>
        {/* <Body>
          <GridItem className="dummy-div" xs={12}>
            Page - SelfHelp
          </GridItem>
          <GridItem xs={12}>
            {this.getFlowsToDisplay()}
          </GridItem>
        </Body> */}
      </GridContainer>
    );
  }
}

export default SelfHelp;
