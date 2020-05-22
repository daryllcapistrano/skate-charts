import React from 'react';
// import { Link } from 'gatsby';
import Grid from '@material-ui/core/Grid';

import Layout from '../components/layout';
import SEO from '../components/seo';

import MaleStreetRankings from '../components/charts/MaleStreetRankings';
import FemaleStreetRankings from '../components/charts/FemaleStreetRankings';
import GoofyVsRegular from '../components/charts/GoofyVsRegular';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Grid container>
			<Grid item xs={12}>
				<MaleStreetRankings />
			</Grid>
			<Grid item xs={12}>
				<FemaleStreetRankings />
			</Grid>
			<Grid item xs={12}>
				<GoofyVsRegular />
			</Grid>
		</Grid>
	</Layout>
);

export default IndexPage;
