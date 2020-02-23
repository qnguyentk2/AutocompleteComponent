import React from 'react';
import { Router, Switch } from 'react-router-dom';
// , withRouter, Route
import { createBrowserHistory } from 'history';
// import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import PageLayout from '@components/PageLayout/PageLayout';
import { GlobalProvider, GlobalConsumer } from '@contexts/GlobalContext';

const history = createBrowserHistory();

const App = () => (
  <GlobalProvider>
    <GlobalConsumer>
      {props => (
        <Router history={history}>
          {/* <ErrorBoundary> */}
          <Switch>
            <PageLayout {...props} />
          </Switch>
          {/* </ErrorBoundary> */}
        </Router>
        )}
    </GlobalConsumer>
  </GlobalProvider>
);

export default App;
