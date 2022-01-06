import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Typography, Grid, Button, Slider } from "@material-ui/core";
import {testBROKERAction} from "../../redux/actions/testBrokerAction";
import { Formik, Form} from "formik";
import "../../App.scss";

export const PublisherForm = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const [values,setValues] = useState({publishers:1,message_interval:10,message_size:1,subscribers:1});
    const handleOnChange =(newValue)=>{
        const pass = localStorage.getItem("pass")
        setValues({...values,...newValue,password:pass});
    }

    const reducer = useSelector((state) => state.Connection);
  return (
    <>
      <Formik
        initialValues={values}
        onSubmit={() => {
            dispatch(testBROKERAction({...reducer.data,...values},history));
        }}
      >
        {({ handleChange,values,errors, touched }) => (
          <Form form-data="form-1">
            <Grid
              container
              justifyContent="flex-start"
              alignItems="center"
              spacing={1}
            >
              <h2>Publisher</h2>
              <Grid item container direction="row">
                <Grid item xs={12}  sm={12} lg={5}>
                  <div>
                    <Typography>Number Of publishers </Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} lg={5}>
                  <Slider
                    name="publishers"
                    margin="normal"
                    valueLabelDisplay="auto"
                    aria-labelledby="disabled-slider"
                    defaultValue={1}
                    min={0}
                    max={100}
                    onChange={(e,value)=> handleOnChange({"publishers":value})}
                  />
                </Grid>
              </Grid>
              <Grid item container direction="row">
                <Grid item xs={12} sm={12} lg={5}>
                  <div>
                    <Typography>Interval (ms)</Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} lg={5}>
                  <Slider
                    name="message_interval"
                    margin="normal"
                    valueLabelDisplay="auto"
                    aria-labelledby="disabled-slider"
                    defaultValue={10}
                    min={10}
                    max={10000}
                    onChange={(e,value)=> handleOnChange({"message_interval":(value/1000)})}
                  />
                </Grid>
              </Grid>
              <Grid item container direction="row">
                <Grid item xs={12} sm={12} lg={5}>
                  <div>
                    <Typography>Message Size (kb) </Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} lg={5}>
                  <Slider
                    name="message_size"
                    margin="normal"
                    valueLabelDisplay="auto"
                    aria-labelledby="disabled-slider"
                    defaultValue={0}
                    min={1}
                    max={1024}
                    onChange={(e,value)=> handleOnChange({"message_size":value})}
                  />
                </Grid>
              </Grid>
              {/* <h2>Subscriber</h2> */}
              <Grid item container direction="row">
                <Grid item xs={12} sm={12} lg={5}>
                  <div>
                    <Typography>Number Of subscribers </Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} lg={5}>
                  <Slider
                    name="subscribers"
                    margin="normal"
                    valueLabelDisplay="auto"
                    aria-labelledby="disabled-slider"
                    defaultValue={1}
                    min={0}
                    max={100}
                    onChange={(e,value)=> handleOnChange({"subscribers":value})}
                  />
                </Grid>
              </Grid>
              <Grid>
                <div className="separator">
                  <div>
                    <Button
                        type="submit"
                        variant="contained" 
                        color="primary"
                    >
                      Start Test
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  );
};
