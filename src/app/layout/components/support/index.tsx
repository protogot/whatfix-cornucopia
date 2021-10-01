import React from "react";
import { GridContainer, GridItem } from "layout/common/Grid/GridContainer";

import "./index.scss";
import Body from "layout/common/Body/Body";

type Props = {};
type State = {};

class Support extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <GridContainer className="page-cornucopia-support">
        {/* SEARCH WILL COME HERE - COMMON - Add all the elements inside <Body>...</Body> */}
        <Body>
          <GridItem className="dummy-div" xs={12}>
            Page - Support
          </GridItem>
        </Body>
      </GridContainer>
    );
  }
}

export default Support;
