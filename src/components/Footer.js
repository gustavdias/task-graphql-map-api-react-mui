import React from "react";
import Links from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import useStyles from "./Album/AlbumStyles";


function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Links color="inherit" href="https://gustavodias.xyz/">
          Gustavo Dias -
        </Links>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </footer>
  );
}
export default Footer;
