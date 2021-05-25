import React, { useState, Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import loadable from "@loadable/component";
// React.lazy : App 컴포넌트를 렌더링하는 시점에서 비동기적으로 로딩할 수 있게 해줌
const SplitMe = loadable(() => import("./SplitMe"), {
  fallback: <div>loading...</div>,
});

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  const onMouseOver = () => {
    SplitMe.preload();
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>
          Hello React!
        </p>
        {/* Suspense는 코드 스플리팅 된 컴포넌트를 로딩하도록 한다. fallback에는 로딩되는 동안 보여줄 것 */}
        {visible && <SplitMe />}
      </header>
    </div>
  );
}

export default App;
