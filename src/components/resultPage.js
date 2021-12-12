import React from "react";
import "../App.scss";
import { PieChart, Pie } from "recharts";

const data01 = [
	{ name: "success", value: 75, fill: "#32a852" },
	{ name: "fail", value: 25, fill: "#d61c1c" },
];

const data02 = [
	{ name: "success", value: 90, fill: "#0054c9" },
	{ name: "fail", value: 10, fill: "#ffb700" },
];

let renderLabel = function (entry) {
	return entry.name + " " + entry.value + "%";
};

const Result = (props) => {
	return (
		<div>
			<h2 className="title">Results</h2>
			<div className="grid-container">
				<div className="section">
					<div>
						<h3>Message</h3>
						<p>
							Sent: <strong>13456</strong>
						</p>
						<p>
							Received: <strong>456</strong>
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
							Sent: <strong>13 MB/S</strong>
						</p>
						<p>
							Received: <strong>8 MB/S</strong>
						</p>
					</div>
					<PieChart width={300} height={200}>
						<Pie
							data={data02}
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
						CPU: <strong>75%</strong>
					</p>
					<p>
						Memory: <strong>750MB</strong>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Result;
