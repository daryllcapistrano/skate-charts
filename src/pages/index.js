import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
// import PieChart from '../components/charts/PieChart';
import StackedBarChart from '../components/charts/StackedBarChart';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		{/* <PieChart /> */}
		<StackedBarChart />
	</Layout>
);

export default IndexPage;
