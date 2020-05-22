import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Chart, PieSeries, Legend, Title } from '@devexpress/dx-react-chart-material-ui';

const data = [ { stance: 'Goofy', area: 60 }, { stance: 'Regular', area: 40 } ];

export default class GoofyVsRegular extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			data
		};
	}

	render() {
		const { data: chartData } = this.state;

		return (
			<Paper>
				<Chart data={chartData}>
					<PieSeries valueField="area" argumentField="stance" />
					<Legend />
					<Title text="Goofy vs Regular" />
				</Chart>
			</Paper>
		);
	}
}
