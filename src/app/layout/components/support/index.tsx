import React from "react";
import { GridContainer, GridItem } from "layout/common/Grid/GridContainer";

import "./index.scss";
import Body from "layout/common/Body/Body";
import BackButton from "layout/common/BackButton";

type Props = {
  history?: any;
};

type State = {};

const SUPPORT_SEARCH_URL =
  "https://jx9o5re9su-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(3.33.0)%3B%20Browser%3B%20autocomplete.js%200.38.0&x-algolia-application-id=JX9O5RE9SU&x-algolia-api-key=NTI0MjdjODA4NzM2MzVlMGVkMjkzMjY2ODMyZDUzZDEyZjNjNGNhOTE3ODQ5NWM1ZjViODgzY2ZhNWQ4ZTQxYXJlc3RyaWN0SW5kaWNlcz1iNWQ2YTFhYy0zMGZkLTQyNzItOTg4My0yNTZmNGExOWVkMjYmdmFsaWRVbnRpbD0xNjMzMzQzNzA";
const SUPPORT_PAYLOAD = {
  requests: [
    {
      indexName: "b5d6a1ac-30fd-4272-9883-256f4a19ed26",
      params:
        "&hitsPerPage=5&attributesToRetrieve=%5B%22slug%22%2C%22breadcrumb%22%5D&analyticsTags=%5B%22UserWebsite%22%5D&attributesToSnippet=%5B%22content%3A18%22%5D&filters=exclude%3Afalse%20AND%20isDraft%3Afalse%20AND%20isHidden%3Afalse%20AND%20NOT%20isCategoryHidden%3Atrue",
    },
  ],
};

// // Example POST method implementation:
// async function postData(url = '', data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }

// SUPPORT_PAYLOAD.requests[0].params = "query=how" + SUPPORT_PAYLOAD.requests[0].params; 
// postData(SUPPORT_SEARCH_URL, SUPPORT_PAYLOAD)
// .then(data => {
//   console.log("Search Response", data); // JSON data parsed by `data.json()` call
// });

class Support extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <GridContainer className="page-cornucopia-support">
        {/* SEARCH WILL COME HERE - COMMON - Add all the elements inside <Body>...</Body> */}
        <BackButton history={this.props.history} />
        <iframe
          id="whatfix-support-iframe"
          src="https://support.whatfix.com/"
        ></iframe>
      </GridContainer>
    );
  }
}

export default Support;
