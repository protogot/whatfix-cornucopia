import React from "react";

type FlowItemProps = {
    flowItem: any;
}
export default class FlowListItem extends React.Component<FlowItemProps, any> {

    constructor(props: FlowItemProps) {
        super(props);
    }

    public clickHandler = (event:any) => {
        console.log("#WFX running flow => ",this.props.flowItem.flow_id);
        (window as any).wfxCornucopiaActions.runFlow(this.props.flowItem.flow_id);
    }

    render() {
        return (
            <div style={{
                backgroundColor:"white",
                padding:"3px",
                marginBlock:"2px",
                fontWeight:"bold"
            }}
            onClick={this.clickHandler}
            >
                {this.props.flowItem.title}
            </div>
        )
    }
}