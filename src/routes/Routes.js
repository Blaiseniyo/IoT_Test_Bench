import React from "react";
import { Switch } from "react-router-dom";
import RouteWithLayout from "../components/RouteWithLayout";
import {DefaultLayout} from "../components/layouts";
import Landing from "../components/landingPage";

const Routes = ()=>{
    return(
        <Switch>
            <RouteWithLayout
                component={Landing}
                exact
                layout={DefaultLayout}
                path="/"
            />
        </Switch>
    )
}

export default Routes;