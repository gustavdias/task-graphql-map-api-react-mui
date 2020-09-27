import React from "react";
import Button from "@material-ui/core/Button";

import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "./Album/AlbumStyles";
import Navbar from "./Navbar";
import auth from "../auth/auth";
import Footer from "./Footer"



const Details = (props) => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Окей Гугл!
          </Typography>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Ok Google!
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item></Grid>
              <Grid item>


                <Button
                  onClick={() => {
                    auth.logout(() => {
                      props.history.push("/");
                    });
                  }}
                  variant="contained"
                  color="primary"
                >
                  Logout
                </Button>


              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <Footer/>
    </>
  );
};

export default Details;
