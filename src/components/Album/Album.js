import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Links from "@material-ui/core/Link";
import useStyles from "./AlbumStyles";
import Navbar from "../Navbar";

import { Link } from "react-router-dom";

//graphql
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
//-----

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Links color="inherit" href="https://gustavodias.xyz/">
        Gustavo Dias -
      </Links>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Album() {
  const classes = useStyles();
  //

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
                species
              }
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error!</p>;

          return data.characters.results.map((character) => {
            return (
              
                <Grid item key={character.id} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={character.image}
                      title={character.name}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {character.name}
                      </Typography>
                      <Typography>Status: {character.status}</Typography>
                      <Typography>Species: {character.species}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        component={Link}
                        to="/details"
                        variant="outlined"
                        color="secondary"
                        size="small"
                      >
                        More Info
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              
            );
          });
        }}
      </Query>
    );
  };

  //

  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            <CharactersQuery />
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
