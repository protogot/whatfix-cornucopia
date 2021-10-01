import Body from "layout/common/Body/Body";
import Footer from "layout/common/Footer/Footer";
import { GridContainer, GridItem } from "layout/common/Grid/GridContainer";
import Navigation from "layout/common/Navigation/Navigation";
import React from "react";
import { LandingProps, LandingState } from "./LandingTypes";

import "./Landing.scss";
import KButton from "layout/common/Button/Button";
import { Hidden } from "@material-ui/core";
import FeatureItems from "./Partials/FeatureItems";

export default class Landing extends React.Component<
  LandingProps,
  LandingState
> {
  constructor(props: LandingProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <GridContainer className="page-landing-component">
        <Navigation />
        <Body>
          <GridContainer className="kridaa-introduction">
            <GridItem xs={12} sm={12} md={5} lg={5} className="page-section">
              <GridContainer className="section-wrapper">
                <GridItem xs={12} className="heading">
                  One Stop Solution
                </GridItem>
                <GridItem xs={12} className="sub-heading">
                  <b>Every</b> Sports at <b>one</b> place,<br />under <b>one</b> roof.
                </GridItem>
                <Hidden smDown={true}>
                  <GridItem md={12} className="actions">
                    <KButton
                      className="download-pre-registration"
                      type="secondary"
                    >
                      Pre-Registration
                    </KButton>
                  </GridItem>
                </Hidden>
              </GridContainer>
            </GridItem>
            <GridItem xs={12} sm={12} md={7} lg={7} className="page-section">
              <img
                className="kridaa-banner"
                alt="kridaa-banner"
                src="public/kridaa-animated-banner.gif"
              />
            </GridItem>
          </GridContainer>
          <GridContainer className="kridaa-features">
            <GridItem className="page-typography-heading" xs={12}>
              Why Kridaa?
            </GridItem>
            <GridItem className="page-typography-sub-heading" xs={12}>
              Create and Organize sport tournaments with just a few clicks.
            </GridItem>
            <FeatureItems/>
          </GridContainer>
          <GridContainer className="kridaa-coming-soon">

          </GridContainer>
        </Body>
        <Footer />
      </GridContainer>
    );
  }
}
