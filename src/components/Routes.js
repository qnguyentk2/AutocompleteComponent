import React, { PureComponent } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import BecomeAHost from '@components/BecomeAHost/BecomeAHost';
import Autocomplete from '@components/Autocomplete/Autocomplete';

// import Bundle from './Bundle';
// Redirect,

// export const renderAsync = (asyncLoad, _props) => {
//   console.log('_props: ', _props);
//   const bundleComp = (
//     <Bundle load={asyncLoad}>
//       {/* {Component =>
//         Component ? <Component {..._props} /> : <Spinner size="large" />
//       } */}
//       {
//         Component => {
//           console.log('Component: ', Component);
//           return <Component {..._props} />
//         }
//       }
//     </Bundle>
//   );

//   return bundleComp;
// }

export const ROUTES = [
  {
    label: 'Landing Page',
    pathname: '/',
    component: Autocomplete
  },
  {
    label: 'Become a host',
    pathname: '/become-a-host',
    // component: props => renderAsync(() => import('../components/BecomeAHost/BecomeAHost'), props),
    component: BecomeAHost,
  }
];

export const renderRoutes = routes =>
  routes.map(route => {
    if (route.children) {
      return renderRoutes(route.children);
    }
    return (
      <Route
        key={route.pathname}
        path={route.pathname}
        exact
        component={route.component}
      />
    );
  });

export class Routes extends PureComponent { // eslint-disable-line
  render() {
    return (
      <Switch>
        {renderRoutes(ROUTES)}
        {/* <Route
          key="notFound"
          component={props =>
            renderAsync(() => import('./common/layout/NotFound'), props)}
        /> */}
      </Switch>
    );
  }
}
  
Routes.displayName = 'Routes';

export default withRouter(Routes);