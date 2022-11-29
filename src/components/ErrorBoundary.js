import { Component, Fragment } from 'react';

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
    this.errorMsg = '';
  }

  componentDidCatch(error) {
    console.log(error.message);
    this.setState({ hasError: true });
    this.errorMsg = error.message;
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <p>Something went wrong!</p>
          <p>{this.errorMsg}</p>
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
