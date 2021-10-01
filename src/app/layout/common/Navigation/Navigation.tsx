import { Hidden } from "@material-ui/core";
import React, { ReactElement } from "react";
import { FcOnlineSupport } from "react-icons/fc";
import KButton from "../Button/Button";
import { GridContainer, GridItem } from "../Grid/GridContainer";
import "./Navigation.scss";

interface Props {}
interface State {}

export default class Navigation extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public NavItem(label: string | ReactElement, width?: number) {
    return (
      <GridItem xs={width || 2} className="nav-items">
        {label || "--"}
      </GridItem>
    );
  }

  public render() {
    const { NavItem } = this;
    return (
      <GridContainer className="page-navigation">
        <GridItem className="logo-container" xs={6} sm={6} md={2} lg={2}>
          <img alt="kridaa-logo" src="public/kridaa-v2.png" />
        </GridItem>
        <Hidden smDown={true}>
          <GridItem className="nav-links-container" md={6}>
            <GridContainer className="nav-links-wrapper">
              {NavItem("SPORT")}
              {NavItem("ATHLETE")}
              {NavItem("FITNESS")}
              {NavItem("APPARELS")}
            </GridContainer>
          </GridItem>
          <GridItem className="nav-links-container authenticate" md={4} lg={4}>
            <GridContainer className="nav-links-wrapper">
              {NavItem("SOCIAL", 2)}
              {NavItem("CONTACT US", 3)}
            </GridContainer>
          </GridItem>
        </Hidden>
        <Hidden smUp={true}>
          <GridItem xs={6} className="actions">
            <KButton
              className="download-pre-registration"
              type="secondary"
            >
              Pre-Registration
            </KButton>
          </GridItem>
        </Hidden>
      </GridContainer>
    );
  }
}
