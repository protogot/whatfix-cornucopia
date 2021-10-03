import React from "react";
import "./index.scss";
import { GridContainer, GridItem } from "../Grid/GridContainer";

type Props = {};
type State = {};

class Header extends React.Component<Props, State>{
  constructor(props: Props){
    super(props);
    this.state = {

    }
  }

  public render(){
    return(
      <GridContainer className="page-header">
        <GridItem className="sub-header left" xs={6}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Whatfix_logo_Cyan.png" />
        </GridItem>
        <GridItem className="sub-header right " xs={6}>
          <i className="icon-close" />
        </GridItem>
      </GridContainer>
    )
  }
}

export default Header;