import {
  InputAdornment,
  TextField,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";
// import VisibilityIcon from "@material-ui/icons/Visibility";
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
  userName: yup
      .string()
      .required('Username is required'),
  password: yup
      .string()
      .required("Password is required"),

});
export const ConnectionForm = () => {
  return (
    <>
      <Formik
        initialValues={{host:"",port:"",userName:"",password:""}}
        onSubmit={(values) => {
            console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form form-data="form-1">
            <Grid container justifyContent="flex-start" alignItems="stretch" spacing={1}>
              <Grid sm={12} lg={7}>
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
                />
              </Grid>
              <Grid sm={12} lg={5}>
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
                />
              </Grid>
              <Grid sm={12} lg={7}>
                <Field
                  name="userName"
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
                />
              </Grid>
              <Grid sm={12} lg={5}>
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
                    // endAdornment: (
                    //   <InputAdornment position="start">
                    //     <Lock />
                    //   </InputAdornment>
                    // ),
                  }}
                />
              </Grid>
              <Grid>

              <div className="separator">
                <div className="btnContainer">
                  <div className="right-space">
                    <Button variant="contained" color="primary">
                      Save settings
                    </Button>
                  </div>
                  <div>
                    <Button variant="contained" color="primary" type="submit">
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
