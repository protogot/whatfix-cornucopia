import React from "react";
import { GridContainer, GridItem } from "layout/common/Grid/GridContainer";

import "./index.scss";
import Body from "layout/common/Body/Body";

type Props = {};
type State = {};

class SelfHelp extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <GridContainer className="page-cornucopia-self-help">
        {/* SEARCH WILL COME HERE - COMMON - Add all the elements inside <Body>...</Body> */}
        <Body>
          <GridItem className="dummy-div" xs={12}>
            Page - SelfHelp
          </GridItem>
        </Body>
      </GridContainer>
    );
  }
}

export default SelfHelp;