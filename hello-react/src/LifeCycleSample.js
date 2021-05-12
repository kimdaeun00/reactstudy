import React, { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null;

  // 제일 처음에 constructor 나옴
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  // props로 받아온 값을 state에 동기화, component가 마운트 될때와 업데이트 시 호출
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    // nextProps : 부모에게 받은 props(color)값, prevState : 이전 state
    if (nextProps.color !== prevState.color) {
      // nextProps와 prevState가 다르다면 state를 부모에게서 받은 props color로 설정
      return { color: nextProps.color };
    }
    return null;
  }

  // 컴포넌트를 만들고, 첫 렌더링을 다 마친후 실행(비동기작업 실행)(제일 처음에만 나옴)
  componentDidMount() {
    console.log("componentDidMount");
  }

  // boolean return, props 또는 state를 변경했을 때 리렌더링을 해야할지 결정 (여기선 number가 4의 배수면 렌더링 안하게함)
  // 따로 설정 안하면 항상 true
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    return nextState.number % 10 !== 4;
  }

  //   컴포넌트를 DOM에서 제거할 때 실행
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };
  // render에서 만들어진 결과물이 브라우저에 실제로 반영되기 전 호출, 업데이트 직전의 값을 참고할 일이 있을 때 활용
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  //   리렌더링을 완료한 후 실행
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState);
    // snapshot : color가 바뀌었다면 이전의 color 보여줌. getSnapshotBeforeUpdate에서 h1의 style.color를 리턴해서
    if (snapshot) {
      console.log("업데이트 직전 색상 : ", snapshot);
    }
  }

  render() {
    console.log("render");
    const style = {
      color: this.props.color,
    };

    return (
      <div>
        {/* {this.props.missing.value} */}
        {/* h1을 ref로 설정, 위에서 현재 color 출력할 때 사용 */}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color : {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
