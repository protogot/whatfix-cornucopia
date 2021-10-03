import React from "react";
import "./index.scss";

import { GridItem } from "../Grid/GridContainer";
import Routes from "./../../../routes/Routes.json";

export default function BackButton({ history } : any){
  function handleBack(){
    if(history && history.push){
      history.push(Routes.LANDING);
    } else {
      console.log("Invalid Redirection");
    }
  }
  return (
    <GridItem className="btn-go-back" onClick={handleBack}>Go Back</GridItem>
  );
}