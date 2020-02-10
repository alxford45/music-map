import React from "react";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Link,
  Box,
  makeStyles,
  Avatar,
  Typography
} from "@material-ui/core";
import { PersonAdd } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  }
}));
type Props = {
  setState: React.Dispatch<
    React.SetStateAction<{
      signIn: boolean;
    }>
  >;
};
export const SignUp: React.FC<Props> = props => {
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <PersonAdd />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password-again"
          label="Password"
          type="password"
          id="password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign Up
        </Button>
        <Grid container>
          <Grid item>
            <Link
              onClick={() => props.setState({ signIn: true })}
              variant="body2"
            >
              {"Already have an account? Sign In"}
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}></Box>
      </form>
    </div>
  );
};
