import React from 'react';
import { Icon, Header } from 'semantic-ui-react';

import Layout from './Layout';

const NoMatch = () => {
  return (
    <Layout>
      <Icon name="minus circle" size="big" />
      <strong>Page not found!</strong>
      <div>
      <Link to="/dynamic">Navigate to Dynamic Page</Link>
      <Link to="/dynamic">Navigate to Dynamic Page</Link>
      <Link to="/dynamic">Navigate to Dynamic Page</Link>

      </div>
    </Layout>
  );
};

export default NoMatch;