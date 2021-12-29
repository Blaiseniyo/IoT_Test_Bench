import {
  InputAdornment,
  TextField,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { testConnectionAction } from "../../redux/actions/connectionAction";
import { Formik, Form, Field } from "formik";
import {Lock } from "@material-ui/icons";
import * as yup from 'yup';
import "../../App.scss";


const validationSchema = yup.object({
  host: yup
      .string()
      .required('host is required'),
  port: yup
      .number()
      .required('port is required'),
  topic: yup
      .string()
      // .required('port is required')
      ,
  topicLevel: yup
      .string()
      // .required('port is required')
      ,
  username: yup
      .string(),
      // .required('Username is required'),
  password: yup
      .string()
      // .required("Password is required"),

});
export const ConnectionForm = () => {
  const dispatch = useDispatch();
  const reducer = useSelector((state) => state.Connection);
  const renderTestBtnColor = ()=>{
    const color = reducer.connected?"#388e3c":"#3f51b5"
  return color
  }
  return (
    <>
      <Formik
        initialValues={{host:"",port:"",username:"",password:"",topic:"",topicLevel:""}}
        onSubmit={(values) => {
            dispatch(testConnectionAction(values));
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form form-data="form-1">
            <Grid container justifyContent="flex-start" alignItems="stretch" spacing={1}>
              <Grid item sm={12} lg={7}>
                <Field
                  name="host"
                  label="Broker Host"
                  margin="normal"
                  as={TextField}
                  variant="outlined"
                  error={touched.host && errors.host}
                  helperText={touched.host && errors.host}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Typography> Host |</Typography>
                      </InputAdornment>
                    ),
                  }}
                  className="field" 
                />
              </Grid>
              <Grid item sm={12} lg={5}>
                <Field
                  name="port"
                  label="Host Port"
                  margin="normal"
                  as={TextField}
                  variant="outlined"
                  error={touched.port && errors.port}
                  helperText={touched.port && errors.port}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Typography>Port |</Typography>
                      </InputAdornment>
                    ),
                  }}
                  className="field" 
                />
              </Grid>
              <Grid item sm={12} lg={7}>
                <Field
                  name="username"
                  label="Username"
                  margin="normal"
                  as={TextField}
                  variant="outlined"
                  error={touched.userName && errors.userName}
                  helperText={touched.userName && errors.userName}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Typography>User |</Typography>
                      </InputAdornment>
                    ),
                  }}
                  className="field" 
                />
              </Grid>
              <Grid item sm={12} lg={5}>
                <Field
                  type="password"
                  name="password"
                  label="Password *"
                  margin="normal"
                  as={TextField}
                  variant="outlined"
                  error={touched.password && errors.password}
                  helperText={touched.password && errors.password}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock />  |
                      </InputAdornment>
                    ),
                  }}
                  className="field" 
                />
              </Grid>
              <Grid item sm={12} lg={7}>
                <Field
                  name="topic"
                  label="Topic"
                  margin="normal"
                  as={TextField}
                  variant="outlined"
                  error={touched.topic && errors.topic}
                  helperText={touched.topic && errors.topic}
                  className="field"        
                />
              </Grid>
              <Grid item sm={12} lg={5}>
                <Field
                  // type="topic"
                  name="topicLevel"
                  label="Topic Level "
                  margin="normal"
                  as={TextField}
                  variant="outlined"
                  error={touched.topicLevel && errors.topicLevel}
                  helperText={touched.topicLevel && errors.topicLevel}
                  className="field" 
                />
              </Grid>
              <Grid>

              <div className="separator">
                <div className="btnContainer">
                  <div>
                    <Button 
                    type="submit"
                    variant="contained"
                     color="primary"
                     style={{backgroundColor:renderTestBtnColor()}}
                    >
                      Test Connection
                    </Button>
                  </div>

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
