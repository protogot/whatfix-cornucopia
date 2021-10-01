import React from "react";
import Router from "./routes/Router";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
