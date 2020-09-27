import React from "react";
import auth from "../auth/auth";
import Button from "@material-ui/core/Button";

import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "./Album/AlbumStyles";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const LandingPage = (props) => {
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
            Landing Page
          </Typography>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Целевая страница
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Please log in to access the app.
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Пожалуйста, войдите, чтобы получить доступ к приложению.
          </Typography>

          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item></Grid>
              <Grid item>
                <Button
                  onClick={() => {
                    auth.login(() => {
                      props.history.push("/app");
                    });
                  }}
                  variant="contained"
                  color="primary"
                >
                  Login
                </Button>

                <Typography
                  variant="p"
                  align="center"
                  color="textSecondary"
                  paragraph
                >
                  Please know that if you try to access the app (*/app) without
                  login, your access will be denied and you will be redirected
                  to this page. You can it try it here:
                </Typography>
                <Typography
                  variant="p"
                  align="center"
                  color="textSecondary"
                  paragraph
                >
                  Обратите внимание, что если вы попытаетесь получить доступ к
                  приложению (* / app) без входа в систему, вам будет отказано в
                  доступе и вы будете перенаправлены на эту страницу. Вы можете
                  попробовать это здесь:
                </Typography>
                <Button
                  component={Link}
                  to="/app"
                  variant="outlined"
                  color="secondary"
                  size="small"
                >
                  Try to access app without logging in
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
};
export default LandingPage;
