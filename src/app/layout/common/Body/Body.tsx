import React from "react";
import { GridContainer } from "../Grid/GridContainer";
import "./Body.scss";

interface Props {}
interface State {}

export default class Body extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <GridContainer className="page-body">{this.props.children}</GridContainer>
    );
  }
}
