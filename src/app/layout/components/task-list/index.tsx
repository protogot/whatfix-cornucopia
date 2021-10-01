import React from "react";
import { GridContainer, GridItem } from "layout/common/Grid/GridContainer";

import "./index.scss";
import Body from "layout/common/Body/Body";
import BackButton from "layout/common/BackButton";

type Props = {
  history?: any;
};

type State = {};

class TaskList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <GridContainer className="page-cornucopia-task-list">
        {/* SEARCH WILL COME HERE - COMMON - Add all the elements inside <Body>...</Body> */}
        <BackButton history={this.props.history} />
        <Body>
          <GridItem className="dummy-div" xs={12}>
            Page - TaskList
          </GridItem>
        </Body>
      </GridContainer>
    );
  }
}

export default TaskList;
