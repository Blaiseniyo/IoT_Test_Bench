import React from 'react';
import { Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab'
import "../App.scss"

function ResultsPending() {
 
    return (
        <div className="result card container-color" >
            <div className='wave-container' >
            <Grid container className="wave-separator">
                <Grid  container xs={6} className="container">
                    <Grid item xs={6}>
                        <Skeleton animation="pulse" variant="rect" width="50%" height={13}  />
                        <Skeleton animation="pulse"  width="30%" height={23} />
                        <Skeleton animation="pulse" width="30%" height={23} />
                    </Grid>
                    <Grid item xs={3}>
                        <Skeleton animation="pulse" variant="circle" width={93} height={93} />
                    </Grid>
                </Grid>
                <Grid item container xs={6}>
                    <Grid item xs={6}>
                        <Skeleton animation="pulse" variant="rect" width="50%" height={13}  />
                        <Skeleton animation="pulse"  width="30%" height={23} />
                        <Skeleton animation="pulse" width="30%" height={23} />
                    </Grid>
                    <Grid item xs={3}>
                        <Skeleton animation="pulse" variant="circle" width={93} height={93} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container className="wave-separator">
                <Grid  container xs={6} className="container">
                    <Grid item xs={6}>
                        <Skeleton animation="pulse" variant="rect" width="50%" height={13}  />
                        <Skeleton animation="pulse"  width="30%" height={23} />
                        <Skeleton animation="pulse" width="30%" height={23} />
                    </Grid>
                </Grid>
                <Grid item container xs={6}>
                    <Grid item xs={6}>
                        <Skeleton animation="pulse" variant="rect" width="50%" height={13}  />
                        <Skeleton animation="pulse"  width="30%" height={23} />
                        <Skeleton animation="pulse" width="30%" height={23} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container className="wave-separator">
                <Grid  container xs={6} className="container">
                    <Grid item xs={6}>
                        <Skeleton animation="pulse" variant="rect" width="50%" height={13}  />
                        <Skeleton animation="pulse"  width="30%" height={23} />
                        <Skeleton animation="pulse" width="30%" height={23} />
                    </Grid>
                </Grid>
                <Grid item container xs={6}>
                    <Grid item xs={6}>
                        <Skeleton animation="pulse" variant="rect" width="50%" height={13}  />
                        <Skeleton animation="pulse"  width="30%" height={23} />
                        <Skeleton animation="pulse" width="30%" height={23} />
                    </Grid>
                </Grid>
            </Grid>
            </div>
        </div>
    )
}

export default ResultsPending;