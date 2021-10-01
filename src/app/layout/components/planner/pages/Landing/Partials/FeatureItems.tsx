import { GridContainer } from "layout/common/Grid/GridContainer";
import React from "react";
import FeatureItem from "./FeatureItem";

type Props = {};
type State = {
  items: Array<{}>;
};
class FeatureItems extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  public render() {
    const { items } = this.state;
    return (
      <GridContainer className="kridaa-features-list">
        {items.map((item: {}, iteratingIndex: number) => (
          <FeatureItem label={"ok"} subLabel={"ok"} img={"sad"} />
        ))}
      </GridContainer>
    );
  }
}

export default FeatureItems;
