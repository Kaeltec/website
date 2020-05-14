import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/SEO';

const NotFoundPage = () => (
  <>
    <SEO title="Page two" />

    <h1>NotFoundPage</h1>
    <Link to="/">Go back to the homepage</Link>
  </>
);

export default NotFoundPage;
