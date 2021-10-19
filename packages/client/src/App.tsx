import React from 'react';

import { useQuery } from 'react-query';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { client } from './shared/utils/api-client';
import Project from './Project';
import { BaseStyle } from './App/BaseStyle';

function App() {
  const { data } = useQuery('issues', async () => {
    const issues = await client('/issues');
    return issues;
  });

  console.log(data);

  return (
    <>
      <BaseStyle />
      <Router>
        <Route path="/project" component={Project} />
      </Router>
    </>
  );
}

export default App;
