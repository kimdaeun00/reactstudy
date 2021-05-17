import React, { Component } from "react";

class HistorySample extends Component {
  handleGoBack = () => {
    this.props.history.goBack();
  };
  handleGoHome = () => {
    this.props.history.push("/");
  };
  componentDidMount() {
    this.unblock = this.props.history.block("정말로 나가시겟습니가?");
  }
  componentWillUnmount() {
    if (this.unblock) {
      this.unblock();
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleGoBack}>뒤로</button>
        <button onClick={this.handleGoHome}>홈</button>
      </div>
    );
  }
}

export default HistorySample;
