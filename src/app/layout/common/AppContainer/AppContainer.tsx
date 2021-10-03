import React from "react";
import Body from "../Body/Body";
import Header from "../Header";
import Search from "../Search";

import "./AppContainer.scss";

interface Props {}
interface State {}

export default class AppContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <div className="cornucopia-web-app-v1">
        <Header />
        <Search/>
        <Body>
          {this.props.children}
        </Body>
      </div>
    );
  }
}
