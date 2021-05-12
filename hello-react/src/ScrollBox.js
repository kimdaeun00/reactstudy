import React, { Component } from "react";

class ScrollBox extends Component {
  scrollToBottom = () => {
    //   this.box가 스크롤바임
    const { scrollHeight, clientHeight } = this.box;
    // scrollTop을 350(내려갈 수 있는 최대로 설정) 리액트에 원래 저장되어 있는 상수같은?
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };
    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white, black)",
    };
    return (
      // 스크롤바 : style, box에다가 ref 설정
      //   스크롤바 div를 메소드로 어떻게 이용하기 위해서 ref로 설정해줌
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        {/* // 안쪽 스타일, div 안에다가 주석 작성하려면 책에 나온대로 */}
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;
