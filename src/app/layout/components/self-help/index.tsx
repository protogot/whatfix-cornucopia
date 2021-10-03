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
  runFlow?: String;
};

class SelfHelp extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    console.log("#WFX props = ", this.props);
    let flowId = this.props.history && this.props.history.location && this.props.history.location.state && this.props.history.location.state.flowId
    this.state = {
      allSHContent: [],
      runFlow: flowId,
    };
  }

  public shContentCallback = (result: any) => {
    this.setState({
      allSHContent: result
    })
  }

  public componentDidMount = () => {
    CALLWINDOW("getAllSHContent", this.shContentCallback);
  }


  public getFlowsToDisplay = () => {
    const allContent: any[] = this.state.allSHContent;
    return (
      allContent.map((content) => {
        if (content.type === "flow") {
          let shouldRunFlow = content.flow_id === this.state.runFlow
          return (
            <GridContainer className="sh-item">
              <FlowListItem
                styleClass="sub-sh-item"
                flowItem={content}
                runFlow={shouldRunFlow}
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
      </GridContainer>
    );
  }
}

export default SelfHelp;
