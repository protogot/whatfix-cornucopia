import React from "react";
import { Button } from "@material-ui/core";

type Props = {
  className?: string;
  type?: "primary" | "default" | "secondary";
  disabled?: boolean;
};

type State = {};

export default class KButton extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render() {
    const { children, type = "default", disabled } = this.props;
    return (
      <Button variant="contained" color={type} disabled={disabled}>
        {children}
      </Button>
    );
  }
}
