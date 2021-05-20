import { createContext, useState } from "react";

// createContext시의 기본값은 context Provider에서 전달하는 value와 똑같이 맞추는 것이 좋다.
const ColorContext = createContext({
  state: { color: "black", subcolor: "red" },
  actions: {
    setColor: () => {},
    setSubColor: () => {},
  },
});

// children : 부모 component로부터 받은 사이에 있던..
const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subcolor, setSubcolor] = useState("red");

  // value의 상태는 state로, 업데이트 함수는 actions로 묶어서 전달
  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

// const ColorConsumer = ColorContext.Consumer 와 같은 의미
// 색상을 조회하는 역할  : consumer, 색상을 변경하는 역할: provider
const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };
export default ColorContext;
