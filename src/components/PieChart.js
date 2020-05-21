import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Chart, PieSeries, Legend, Title } from '@devexpress/dx-react-chart-material-ui';
import { CountryData as data } from '../data/data-visualization';

export default class PieChart extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			data,
			height: '100%'
		};
	}

	render() {
		const { data: chartData, height } = this.state;

		return (
			<Paper elevation="2">
				<Chart data={chartData} height={height}>
					<PieSeries valueField="area" argumentField="country" />
					<Legend />
					<Title text="Countries" />
				</Chart>
			</Paper>
		);
	}
}
