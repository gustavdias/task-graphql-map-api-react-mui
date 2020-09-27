import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/theme";
import { BrowserRouter as Router } from "react-router-dom";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
});

ReactDOM.render(
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
      <CssBaseline />
        <Router>
          <App />
        </Router>
      </ApolloProvider>
    </ThemeProvider>
  </React.Fragment>,
  document.getElementById("root")
);
