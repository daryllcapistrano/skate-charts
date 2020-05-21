import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import MaleStreetRankings from '../components/charts/MaleStreetRankings';
import FemaleStreetRankings from '../components/charts/FemaleStreetRankings';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<MaleStreetRankings />
		<br />
		<FemaleStreetRankings />
	</Layout>
);

export default IndexPage;
