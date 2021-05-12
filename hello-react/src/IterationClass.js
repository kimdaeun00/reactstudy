import React, { Component } from "react";

class IterationClass extends Component {
  state = {
    names: [
      { id: 1, text: "snowman" },
      { id: 2, text: "ice" },
      { id: 3, text: "snow" },
      { id: 4, text: "wind" },
    ],
    inputText: "",
    nextId: 5,
  };

  handlerOnChange = (e) => {
    this.setState({
      inputText: e.target.value,
    });
  };

  handlerClick = () => {
    const nextNames = this.state.names.concat({
      id: this.state.nextId,
      text: this.state.inputText,
    });
    this.setState({
      nextId: this.state.nextId + 1,
      names: nextNames,
      inputText: "",
    });
  };
  handlerKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handlerClick();
    }
  };
  handlerRemove = (id) => {
    const nextNames = this.state.names.filter((name) => name.id != id);
    this.setState({
      names: nextNames,
    });
  };
  render() {
    const namesList = this.state.names.map((name) => (
      <li key={name.id} onDoubleClick={() => this.handlerRemove(name.id)}>
        {name.text}
      </li>
    ));
    return (
      <div>
        <input
          onKeyPress={this.handlerKeyPress}
          onChange={this.handlerOnChange}
        />
        <button onClick={this.handlerOnChange}>추가</button>
        <ul>{namesList}</ul>
      </div>
    );
  }
}

export default IterationClass;
