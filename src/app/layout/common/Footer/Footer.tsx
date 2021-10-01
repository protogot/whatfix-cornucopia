import React from "react";
import { GridContainer, GridItem } from "../Grid/GridContainer";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "./Footer.scss";

interface Props {}
interface State {}

export default class Footer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <GridContainer className="page-footer">
        <GridItem xs={12}>
          Built with <FavoriteIcon className="made-by-love-icon" /> by &nbsp;
          <a href="javascript:void(0)">Kridaa Ventures</a>
        </GridItem>
      </GridContainer>
    );
  }
}
