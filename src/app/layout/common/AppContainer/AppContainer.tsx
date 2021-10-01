import React from "react";

import "./AppContainer.scss";

interface Props {}
interface State {}

export default class AppContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render() {
    return <div className="kridaa-web-app-v1">{this.props.children}</div>;
  }
}
