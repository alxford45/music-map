import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import { SignIn } from "../components/forms/SignIn";
import { SignUp } from "src/components/forms/SignUp";
//https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/sign-in-side

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

export const Home: React.FC = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({ signIn: true });

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          {state.signIn ? (
            <SignIn setState={setState} />
          ) : (
            <SignUp setState={setState} />
          )}
        </div>
      </Grid>
    </Grid>
  );
};
