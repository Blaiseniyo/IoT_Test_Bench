import React, {useState} from "react";
import { Typography, Grid, Button, Slider } from "@material-ui/core";
import { Formik, Form} from "formik";
import "../../App.scss";

export const PublisherForm = () => {
    const [values,setValues] = useState({numberOfPublisher:0,topicLevels:0,interval:10,messageSize:1,numberOfSubscribers:0,subscriberTopicLevels:0});
    const handleOnChange =(newValue)=>{
        setValues({...values,...newValue});
    }
  return (
    <>
      <Formik
        initialValues={values}
        onSubmit={() => {
            console.log(values)
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
                <Grid item sm={12} lg={5}>
                  <div>
                    <Typography>Number Of publishers </Typography>
                  </div>
                </Grid>
                <Grid item sm={12} lg={5}>
                  <Slider
                    name="numberOfPublisher"
                    margin="normal"
                    valueLabelDisplay="auto"
                    aria-labelledby="disabled-slider"
                    defaultValue={0}
                    min={0}
                    max={100}
                    onChange={(e,value)=> handleOnChange({"numberOfPublisher":value})}
                  />
                </Grid>
              </Grid>
              <Grid item container direction="row">
                <Grid item sm={12} lg={5}>
                  <div>
                    <Typography>Topic Levels </Typography>
                  </div>
                </Grid>
                <Grid item sm={12} lg={5}>
                  <Slider
                    name="topicLevels"
                    margin="normal"
                    valueLabelDisplay="auto"
                    aria-labelledby="disabled-slider"
                    defaultValue={0}
                    min={0}
                    max={100}
                    onChange={(e,value)=> handleOnChange({"topicLevels":value})}
                  />
                </Grid>
              </Grid>
              <Grid item container direction="row">
                <Grid item sm={12} lg={5}>
                  <div>
                    <Typography>Interval (ms)</Typography>
                  </div>
                </Grid>
                <Grid item sm={12} lg={5}>
                  <Slider
                    name="interval"
                    margin="normal"
                    valueLabelDisplay="auto"
                    aria-labelledby="disabled-slider"
                    defaultValue={0}
                    min={10}
                    max={10000}
                    onChange={(e,value)=> handleOnChange({"interval":value})}
                  />
                </Grid>
              </Grid>
              <Grid item container direction="row">
                <Grid item sm={12} lg={5}>
                  <div>
                    <Typography>Message Size (kb) </Typography>
                  </div>
                </Grid>
                <Grid item sm={12} lg={5}>
                  <Slider
                    name="messageSize"
                    margin="normal"
                    valueLabelDisplay="auto"
                    aria-labelledby="disabled-slider"
                    defaultValue={0}
                    min={1}
                    max={1024}
                    onChange={(e,value)=> handleOnChange({"messageSize":value})}
                  />
                </Grid>
              </Grid>
              <h2>Subscriber</h2>
              <Grid item container direction="row">
                <Grid item sm={12} lg={5}>
                  <div>
                    <Typography>Number Of subscribers </Typography>
                  </div>
                </Grid>
                <Grid item sm={12} lg={5}>
                  <Slider
                    name="numberOfSubscribers"
                    margin="normal"
                    valueLabelDisplay="auto"
                    aria-labelledby="disabled-slider"
                    defaultValue={0}
                    min={0}
                    max={100}
                    onChange={(e,value)=> handleOnChange({"numberOfSubscribers":value})}
                  />
                </Grid>
              </Grid>
              <Grid item container direction="row">
                <Grid item sm={12} lg={5}>
                  <div>
                    <Typography>Topic Levels </Typography>
                  </div>
                </Grid>
                <Grid item sm={12} lg={5}>
                  <Slider
                    name="subscriberTopicLevels"
                    margin="normal"
                    valueLabelDisplay="auto"
                    aria-labelledby="disabled-slider"
                    defaultValue={0}
                    min={0}
                    max={100}
                    onChange={(e,value)=> handleOnChange({"subscriberTopicLevels":value})}
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
