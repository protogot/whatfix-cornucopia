import { GridItem } from "layout/common/Grid/GridContainer";
import React from "react";

type Props = {
  label: string;
  subLabel: string;
  img: string;
};

export default class FeatureItem extends React.Component<Props, any> {
  public render() {
    const { label, subLabel, img } = this.props;
    return (
      <GridItem className="kridaa-feature">
        <GridItem className="feature-image">
          <img
            src={`public/${img}`}
            alt="feature-events"
            className="events"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6} lg={6} className="feature-description">
          {label}
          <br />
          {subLabel}
        </GridItem>
      </GridItem>
    );
  }
}
