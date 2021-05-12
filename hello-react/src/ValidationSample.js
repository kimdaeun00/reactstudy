import React, { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };
  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "asdf",
    });
    this.input.focus();
  };
  render() {
    return (
      <div>
        <input
          ref={(ref) => (this.input = ref)}
          type="password"
          //   value={this.state.password}
          onChange={this.handleChange}
          className={
            // button이 클릭되었으면, 색깔이 바뀌어야 한다. input이 들어오면서 handleChange로 인해 validated값이 바뀌었을 것이고, className을 그것에 따라 설정하여 style을 설정한다.
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}
export default ValidationSample;
