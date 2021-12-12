import React from "react";
import { Switch } from "react-router-dom";
import RouteWithLayout from "../components/RouteWithLayout";
import { DefaultLayout } from "../components/layouts";
import Landing from "../components/landingPage";
import Result from "../components/resultPage";

const Routes = () => {
	return (
		<Switch>
			<RouteWithLayout
				component={Landing}
				exact
				layout={DefaultLayout}
				path="/"
			/>
			<RouteWithLayout
				component={Result}
				exact
				layout={DefaultLayout}
				path="/result"
			/>
		</Switch>
	);
};

export default Routes;
