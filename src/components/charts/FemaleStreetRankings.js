import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Chart, ArgumentAxis, ValueAxis, BarSeries, Title } from '@devexpress/dx-react-chart-material-ui';

import { scaleBand } from '@devexpress/dx-chart-core';
import { ArgumentScale } from '@devexpress/dx-react-chart';

import { femaleRankings } from '../../data/street-rankings';

export default class StackedBarChart extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			data: femaleRankings
		};
	}

	render() {
		const { data: chartData } = this.state;

		return (
			<Paper>
				<Chart data={chartData}>
					<ArgumentScale factory={scaleBand} />
					<ArgumentAxis />
					<ValueAxis />

					<BarSeries valueField="wsrPoints" argumentField="name" name="wsrPoints" />

					<Title text="Top 10 Street Rankings (female)" />
				</Chart>
			</Paper>
		);
	}
}
