import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Slide, Snackbar,CircularProgress,makeStyles } from "@material-ui/core";
import { ConnectionForm } from "./forms/connectionForm";
import { PublisherForm } from "./forms/testForm";
import MuiAlert from "@material-ui/lab/Alert";
import { clearSnackBar } from "../redux/actions/connectionAction";
import "../App.scss";

const useStyles = makeStyles((theme) => ({
    spinner: {
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        marginTop: theme.spacing(30)
    },
}))

const Landing = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const reducer = useSelector((state) => state.Connection);
  const brokerReducer = useSelector((state) => state.TestBroker);
  const TransitionUp = (props) => {
    return <Slide {...props} direction="up" />;
  };

  const closeSnackBarTimer = () => {
    dispatch(clearSnackBar());
  };

  return (
    <div className="container">
    {brokerReducer.pending?
     <div className={classes.spinner} >
        <CircularProgress />
    </div>:

      <Grid
        container
        direction="row"
        spacing={8}
        justifyContent="center"
        alignContent="space-between"
        className="container"
      >
        <Snackbar
          open={reducer.snackBarMessage.open ? reducer.snackBarMessage.open : false || brokerReducer.snackBarMessage.open ? brokerReducer.snackBarMessage.open : false }
          onClose={closeSnackBarTimer}
          autoHideDuration={4000}
          TransitionComponent={TransitionUp}
        >
          <MuiAlert
            severity={reducer.snackBarMessage.severity ? reducer.snackBarMessage.severity : "info" || brokerReducer.snackBarMessage.severity ? brokerReducer.snackBarMessage.severity : "info"}
            variant="filled"
            elevation={6}
          >
            {reducer.snackBarMessage.message ? reducer.snackBarMessage.message : "" || brokerReducer.snackBarMessage.message ? brokerReducer.snackBarMessage.message : ""}
          </MuiAlert>
        </Snackbar>
        <Grid item xs={12} sm={6}>
          <div className="card">
            <h2>Settings </h2>
            <ConnectionForm />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="card">
            <PublisherForm />
          </div>
        </Grid>
      </Grid>
    }
    </div>
  );
};

export default Landing;
