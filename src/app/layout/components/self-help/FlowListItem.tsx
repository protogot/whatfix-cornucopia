import { CALLWINDOW, UPDATEWINDOW } from "../../../helpers/GWTConnection";
import { GridContainer, GridItem } from "layout/common/Grid/GridContainer";
import React from "react";

type FlowItemProps = {
    flowItem: any;
    styleClass?: string;
    runFlow?:Boolean;
}

type FlowItemState = {
    stepSearchStart:Boolean;
    currentStep:Number;
    stepFound:Boolean;
    stepMissed:Boolean;
    flowStarted:Boolean;
    totalSteps:number;
}

export default class FlowListItem extends React.Component<FlowItemProps, FlowItemState> {

    constructor(props: FlowItemProps) {
        super(props);
        this.state = {
            stepSearchStart:false,
            currentStep:0,
            stepFound:false,
            stepMissed:false,
            flowStarted:false,
            totalSteps:0,
        }
    }

    public attachStepEventListeners = () => {
        (window as any).stepOnAfterShow = this.stepOnAfterShow;
        (window as any).stepOnBeforeShow = this.stepOnBeforeShow;
        (window as any).stepOnMiss = this.stepOnMiss;
        (window as any).flowOnEnd = this.flowOnEnd;
    }

    public stepOnAfterShow = (event:any) => {
        this.setState({
            stepFound:true,
            stepSearchStart:false,
        })
    }

    public stepOnBeforeShow = (event:any) => {
        this.setState({
          stepSearchStart:true,
          currentStep:event.step+1,
          stepFound:false,
          totalSteps:event.steps
        })
    }

    public stepOnMiss = (event:any) => {
        this.setState({
            stepSearchStart:false,
            currentStep:event.step+1,
            stepFound:false,
            stepMissed:true,
        })
    }

    public flowOnEnd = (event:any) => {
        this.setState({
            flowStarted:false
        })
        CALLWINDOW("removeStepEventHandler");
    }

    public getSearchingStatus = () => {
        
        let status="";
        
        let isSearching = this.state.stepSearchStart && !this.state.stepFound;
        
        if(isSearching){
            status = `Searching Step ${this.state.currentStep} of ${this.state.totalSteps}`
        }else if(this.state.stepFound){
            status = `Showing Step ${this.state.currentStep} of ${this.state.totalSteps}`
        }else if(this.state.stepMissed){
            status = `Step ${this.state.currentStep} not found`
        }

        return this.state.flowStarted && (
            <>
                {status}
            </>
        );
    }

    public clickHandler = (event: any) => {
        this.runFlow();
    }

    public runFlow = () => {
        this.attachStepEventListeners();
        CALLWINDOW("attachStepEventHandler");
        CALLWINDOW("runFlow", this.props.flowItem.flow_id);
        this.setState({
            flowStarted:true,
        })
    }

    public getSlideShow = () => {
        let ENT:any = CALLWINDOW("getEnt");
        const {name, ent_id} = ENT;
        const flowId = this.props.flowItem.flow_id;
        const srcUrl = `//quickolabs.com/${name}/deck.html?start=2&closeable=false&entId=${ent_id}#!micro/${flowId}/`;
        console.log("getting Ent here react", ENT);
        return (
            <div>
                <iframe
                    scrolling="no"
                    frameBorder="0"
                    style={{
                        width: "410px",
                        height: "457px",
                        borderRadius: "4px"}}
                    src={srcUrl}>
                </iframe>
                <div>
                    <button onClick={this.onClickClose} style={{backgroundColor:"lightsalmon"}}>Close</button>
                </div>
            </div>
        );
    }

    public onClickClose = () => {
        this.setState({
            stepSearchStart:false,
            currentStep:0,
            stepFound:false,
            stepMissed:false,
            flowStarted:false,
            totalSteps:0,
        });
    }

    render() {
        return (
            <GridContainer direction="column">

                <GridContainer direction="row">
                    <GridItem
                        className={this.props.styleClass + " right"}
                        onClick={this.clickHandler}
                        xs={8}
                    >
                        {this.props.flowItem.title}
                    </GridItem>
                    <GridItem
                        xs={4}
                    >
                        {this.getSearchingStatus()}
                    </GridItem>
                </GridContainer>
                <GridItem
                    style={{
                        alignSelf:"center",
                        marginBlock:"10px",
                    }}
                >
                    {this.state.stepMissed && this.getSlideShow()}
                </GridItem>
            </GridContainer>
        )
    }
}