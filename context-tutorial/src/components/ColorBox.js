import React, { useContext } from "react";
import ColorContext from "../contexts/color";
const ColorBox = () => {
  const { state } = useContext(ColorContext);
  return (
    //   ColorContext 안에 들어 있는 Consumer 컴포넌트를 통해 색상 조회
    //   {/* 컴포넌트 사이에 함수 넣어주기 : function as a child, render props */}
    //   {/* ColorContext에서 {color:~}라는 객체를 default값을 줬음 그 colorContext값을 그냥 value로 씀 */}
    <>
      <div
        style={{
          width: "64px",
          height: "64px",
          background: state.color,
        }}
      />
      <div
        style={{
          width: "32px",
          height: "32px",
          background: state.subcolor,
        }}
      />
    </>
  );
};

export default ColorBox;
