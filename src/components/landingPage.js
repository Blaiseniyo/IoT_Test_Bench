import React from 'react';
import { Grid} from '@material-ui/core';
import { ConnectionForm } from './forms/connectionForm';
import {PublisherForm} from "./forms/testForm";
import "../App.scss"

// const useStyles = makeStyles({
//     root: {
//       width: 300,
//     },
//   });

const Landing = () =>{
    // const classes = useStyles();
    return (
        <div className="container">
            <Grid container direction='row' spacing={8}  justifyContent='center' alignContent='space-between' className="container">
                <Grid item xs={12} sm={6}>
                    <div className="card">
                        <h2>Settings </h2>
                        <ConnectionForm/>
                    </div>

                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className="card" >
                        <PublisherForm/>
                    </div>
                </Grid>
            </Grid>
        
        </div>
    )
}

export default Landing
