import React from "react";
import ReactDOM from "react-dom";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";

import "./styles.css";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql"
});

const CharactersQuery = () => {
  return (
    <Query
      query={gql`
        {
          characters {
            results {
              id
              name
              status
              image
            }
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error!</p>;

        return data.characters.results.map(character => {
          return (
            <div key={character.id}>
            <p >Name: {character.name}</p>
            <p >Status: {character.status}</p>
            <img href={character.image} ></img>
            <p ></p>
            </div>

          );
        });
      }}
    </Query>
  );
};

function App() {
  return (
    <div className="App">
      <CharactersQuery />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  rootElement
);
