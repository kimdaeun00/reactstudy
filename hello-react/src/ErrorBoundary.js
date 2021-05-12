import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    error: false,
  };
  //   내장함수인듯?
  componentDidCatch(error, info) {
    this.setState({
      error: true,
    });
    console.log({ error, info });
  }
  render() {
    // error가 났다면 'error occurred!' 리턴
    if (this.state.error) return <div>error occurred!</div>;
    // 아니면 <ErrorBoundary/>로 감싸진 children 실행
    return this.props.children;
  }
}

export default ErrorBoundary;
