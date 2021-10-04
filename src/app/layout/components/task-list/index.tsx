import React from "react";
import { GridContainer, GridItem } from "layout/common/Grid/GridContainer";

import "./index.scss";
import Body from "layout/common/Body/Body";
import BackButton from "layout/common/BackButton";
import { CALLWINDOW, UPDATEWINDOW } from "./../../../helpers/GWTConnection";
import { Checkbox, Chip } from "@material-ui/core";

type Props = {
  history?: any;
  runFlow?:Boolean;
};

type State = {
  taskLists: any;
};

class TaskList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    let flowId = this.props.history && this.props.history.location && this.props.history.location.state && this.props.history.location.state.flowId;
    
    this.state = {
      taskLists: null,
    };

    if(flowId){
      this.handleTaskStart(flowId);
    }
  }

  public componentDidMount() {
    const _this = this;
    UPDATEWINDOW("fetchTasksListCallback", (response: any) => {
      _this.setState({
        taskLists: response,
      });
    });
    CALLWINDOW("fetchTasksList");
  }

  public handleTaskStart(flowId: string) {
    CALLWINDOW("runTasks", flowId);
  }

  public render() {
    console.log("Task Lists", this.state.taskLists);
    const currentTasks =
      this.state.taskLists && this.state.taskLists.tasker_data;
    return (
      <GridContainer className="page-cornucopia-task-list">
        {/* SEARCH WILL COME HERE - COMMON - Add all the elements inside <Body>...</Body> */}
        <BackButton history={this.props.history} />
        <GridContainer className="task-items-list">
          {currentTasks && currentTasks.flows && currentTasks.flows.length
            ? currentTasks.flows.map((flow: any) => {
                const isCurrentTaskCompleted =
                  currentTasks.completed.indexOf(flow.flow_id) > -1;
                return (
                  <GridContainer
                    className={
                      "task-item" + (isCurrentTaskCompleted ? " completed" : "")
                    }
                    title={
                      isCurrentTaskCompleted ? "Task Completed" : "Pending Task"
                    }
                    onClick={() => this.handleTaskStart(flow.flow_id)}
                  >
                    <GridItem xs={1} className="sub-task-item left">
                      {isCurrentTaskCompleted ? (
                        <i className="icon-icon-check completed"></i>
                      ) : (
                        <i className="icon-ic20-play pending"></i>
                      )}
                    </GridItem>
                    <GridItem xs={11} className="sub-task-item right">
                      <GridItem className="content-name">{flow.title}</GridItem>
                      <GridItem className="content-type-wrapper">
                        <Chip label="Flow" className="content-type" />
                      </GridItem>
                    </GridItem>
                  </GridContainer>
                );
              })
            : null}
        </GridContainer>
      </GridContainer>
    );
  }
}

export default TaskList;
