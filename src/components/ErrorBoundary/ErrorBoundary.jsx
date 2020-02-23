import React from 'react';
import PropTypes from 'prop-types';
// import { captureReactError } from 'common/sentry';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }

  componentDidCatch() {
    this.setState({ error: true });
    // captureReactError(error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return (
        <div
          image="/icon-error-SPlatform.gif"
          description={(
            <span>
              We&aposre sorry — something&aposs gone wrong.
              <br />
              Our team has been notified.
            </span>
          )}
        />
      );
    }
    return this.props.children;
  }
}

// eslint-disable-line
ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};
