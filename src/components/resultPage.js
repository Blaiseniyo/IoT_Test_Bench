import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Slide, Snackbar, Grid, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import MuiAlert from "@material-ui/lab/Alert";
import { clearSnackBar } from "../redux/actions/testBrokerAction";
import "../App.scss";
import { PieChart, Pie } from "recharts";

let renderLabel = function (entry) {
  return entry.name + " " + entry.value + "%";
};

const Result = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const reducer = useSelector((state) => state.TestBroker);
  const data01 = [
    {
      name: "fail",
      value: 100 - reducer.result.sentMessages_percentage,
      fill: "#d61c1c",
    },
    {
      name: "pass",
      value: reducer.result.sentMessages_percentage,
      fill: "#32a852",
    },
  ];

  const TransitionUp = (props) => {
    return <Slide {...props} direction="up" />;
  };

  const closeSnackBarTimer = () => {
    dispatch(clearSnackBar());
  };
  return (
    <>
      <h2 className="title">REPORT</h2>
      <div className="container card container-color">
        <Snackbar
          open={reducer ? reducer.snackBarMessage.open : false}
          onClose={closeSnackBarTimer}
          autoHideDuration={4000}
          TransitionComponent={TransitionUp}
        >
          <MuiAlert
            severity={reducer ? reducer.snackBarMessage.severity : "info"}
            variant="filled"
            elevation={6}
          >
            {reducer ? reducer.snackBarMessage.message : ""}
          </MuiAlert>
        </Snackbar>
        <Grid container className="grid-separator">
          <Grid container item xs={12} sm={6} className="container section">
            <Grid item xs={12} sm={7}>
              <div>
                <h3>Message</h3>
                <p>
                  Sent Messages: <strong>{reducer.result.sentMessages}</strong>
                </p>
                <p>
                  Sent Messages Size:{" "}
                  <strong>{`${reducer.result.sentSize / 1024} MBs`}</strong>
                </p>
                <p>
                  Message Received :{" "}
                  <strong>{reducer.result.recievedMessages}</strong>
                </p>
                <p>
                  Message Received Size:{" "}
                  <strong>{`${reducer.result.recievedSize / 1024} MBs`}</strong>
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={5}></Grid>
          </Grid>
          <Grid item container xs={12} sm={6}>
            <Grid item xs={12} sm={5}>
              <h3>Graph</h3>
              <PieChart width={300} height={200}>
                <Pie
                  data={data01}
                  dataKey="value"
                  innerRadius={30}
                  outerRadius={40}
                  fill="#82ca9d"
                  label={renderLabel}
                />
              </PieChart>
            </Grid>
          </Grid>
        </Grid>
        <Grid container className="grid-separator">
          <Grid container xs={12} sm={6}>
            <Grid item xs={12} sm={6}>
              <div>
                <h3>Broker</h3>
                <p>
                  CPU: <strong>{`${reducer.result.CPU_used}%`}</strong>
                </p>
                <p>
                  Memory:{" "}
                  <strong>{`${reducer.result.RAM_size_used} MBs`}</strong>
                </p>
              </div>
            </Grid>
          </Grid>
          <Grid item container xs={6}>
            <Grid item xs={12} sm={6}>
              <div>
                <h3>Time</h3>
                <p>
                  Total Time:{" "}
                  <strong>{`${reducer.result.totalTime} seconds`}</strong>
                </p>
                <p>
                  Sent Messages Per Second:{" "}
                  <strong>{`${reducer.result.messages_per_second}`}</strong>
                </p>
                <p>
                  Message Received Per Second:{" "}
                  <strong>{`${reducer.result.received_per_second}`}</strong>
                </p>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid container className="grid-separator"></Grid>
      </div>
      <div className="container btn-separator">
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/")}
        >
          Back
        </Button>
      </div>
    </>
  );
};

export default Result;
