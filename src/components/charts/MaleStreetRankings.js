import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Chart, ArgumentAxis, ValueAxis, BarSeries, Title, Legend } from '@devexpress/dx-react-chart-material-ui';

import { scaleBand } from '@devexpress/dx-chart-core';
import { ArgumentScale } from '@devexpress/dx-react-chart';

import { maleRankings } from '../../data/street-rankings';

export default class StackedBarChart extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			data: maleRankings
		};
	}

	render() {
		const { data: chartData } = this.state;

		return (
			<Paper>
				{/* reversed to show #1 on top */}
				<Chart data={chartData.reverse()} rotated="true">
					<ArgumentScale factory={scaleBand} inverted={true} />
					<ArgumentAxis inverted={true} />
					<ValueAxis inverted={true} />

					<BarSeries name="wsrPoints" valueField="wsrPoints" argumentField="name" barWidth="1" />
					<Legend />
					<Title text="Top 10 Street Rankings (male)" />
				</Chart>
			</Paper>
		);
	}
}
