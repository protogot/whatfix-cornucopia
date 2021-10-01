import { Grid } from "@material-ui/core";
import React from "react";

interface ContainerProps {
  className?: string;
  id?: string;
}
interface ContainerState {}

class GridContainer extends React.Component<any, ContainerState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  public render() {
    const { props } = this;
    return (
      <Grid container {...props}>
        {props.children}
      </Grid>
    );
  }
}

interface ItemProps {
  span?: number;
  className?: string;
  id?: string;
  xs?: any;
  sm?: any;
  md?: any;
  lg?: any;
  xl?: any;
}
interface ItemState {}

class GridItem extends React.Component<any, ItemState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  public render() {
    const { props } = this;
    return (
      <Grid item {...props}>
        {props.children}
      </Grid>
    );
  }
}

export { GridContainer, GridItem };
