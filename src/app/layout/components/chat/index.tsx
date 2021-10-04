import React from "react";
import { GridContainer, GridItem } from "layout/common/Grid/GridContainer";
import Zendesk from "react-zendesk";
const ZENDESK_KEY = "364c32e2-935c-4210-bad9-972e9fe6de01";
import "./index.scss";
import Body from "layout/common/Body/Body";
import BackButton from "layout/common/BackButton";

type Props = {
  history?: any;
};

type State = { opacity?: number };

const setting = {};

class Chat extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      opacity: 0
    };
  }

  componentDidMount() {

    const it1 = setInterval(() => {
      const launcher: any = document.getElementById("launcher")
      if (launcher) {
        const launcherButton = launcher.contentDocument.getElementsByTagName("button")[0]
        if(launcherButton) {
          launcherButton.click()
          clearInterval(it1)
        }
        const it2 = setInterval(() => {
          const chatFrame: any = document.getElementById("webWidget")
          if (chatFrame) {
            chatFrame.style.width = '100%'
            chatFrame.style.height = '100%'
            clearInterval(it2)
            const hSxrMH: any = chatFrame.getElementsByClassName("hSxrMH")
            if (hSxrMH && hSxrMH[0]) {
              hSxrMH[0].style.padding = 0;
            }
            this.setState({
              opacity: 1
            })
          }
        }, 50)
      }
    }, 50)
  }

  onClickBack() {
    this.setState({opacity: 0})
    const chatFrame: any = document.getElementById("webWidget")
    const minimizeButton: any = chatFrame.contentDocument.querySelector('[aria-label="Minimise widget"]')
    minimizeButton.click()
  }

  render() {
    return (
      <GridContainer className="page-cornucopia-chat">
        {/* SEARCH WILL COME HERE - COMMON - Add all the elements inside <Body>...</Body> */}
        <BackButton history={this.props.history} onClick={() => this.onClickBack()}/>
        <Body>
          <GridItem className="dummy-div" xs={12} styles={{ opacity: this.state.opacity }}>
            <Zendesk defer zendeskKey={ZENDESK_KEY} {...setting} onLoaded={() => console.log('is loaded')} />
          </GridItem>
        </Body>
      </GridContainer>
    );
  }
}

export default Chat;
