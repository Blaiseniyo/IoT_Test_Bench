import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Slide, Snackbar} from "@material-ui/core";
// import { useHistory } from "react-router-dom";
import MuiAlert from "@material-ui/lab/Alert";
import { clearSnackBar } from "../redux/actions/testBrokerAction";
import "../App.scss";
import { PieChart, Pie } from "recharts";


let renderLabel = function (entry) {
	return entry.name + " " + entry.value + "%";
};

const Result = (props) => {
	
	const dispatch = useDispatch();
	// const history = useHistory()
	const reducer = useSelector((state) => state.TestBroker);
	const data01 = [
		{ name: "fail", value:(100-reducer.result.sentMessages_percentage), fill: "#d61c1c" },
		{ name: "success", value:reducer.result.sentMessages_percentage, fill: "#32a852" },
	];

	// const data02 = [
	// 	{ name: "success", value: 90, fill: "#0054c9" },
	// 	{ name: "fail", value: 10, fill: "#ffb700" },
	// ];
	const TransitionUp = (props) => {
		return <Slide {...props} direction="up" />;
	  };
	
	  const closeSnackBarTimer = () => {
		dispatch(clearSnackBar());
	  };
	return (
		<>
			<h2 className="title">Results</h2>
			<div className="container card">
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
				<div className="grid-container">
					<div className="section">
						<div>
							<h3>Message</h3>
							<p>
								Sent: <strong>{reducer.result.sentMessages}</strong>
							</p>
							<p>
								Received: <strong>{reducer.result.recievedMessages}</strong>
							</p>
						</div>
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
					</div>
					<div className="section">
						<div>
							<h3>Data</h3>
							<p>
								Sent: <strong>{`${reducer.result.sentSize/1024} MBs`}</strong>
							</p>
							<p>
								Received: <strong>{`${reducer.result.recievedSize/1024} MBs`}</strong>
							</p>
						</div>
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
					</div>
					<div>
						<h3>Usage</h3>
						<p>
							CPU: <strong>{`${reducer.result.CPU_used}%`}</strong>
						</p>
						<p>
							Memory: <strong>{`${reducer.result.RAM_size_used} MBs`}</strong>
						</p>
					</div>
					<div>
						<h3>Time</h3>
						<p>
							Total Time: <strong>{`${reducer.result.totalTime} seconds`}</strong>
						</p>
						<p>
							Sent Messages Per Second: <strong>{`${reducer.result.messages_per_second}`}</strong>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Result;
