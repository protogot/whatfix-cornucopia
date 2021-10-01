import React from "react";
import Landing from "./pages/Landing/Landing";

type Props = {};
type State = {};

export default class Planner extends React.Component<Props, State>{
  constructor(props: Props){
    super(props);
    this.state = {};
  }

  public render(){
    return(
      <Landing/>
    )
  }
}