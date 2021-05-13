import React from "react";
import styles from "./CSSModule.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const CSSModule = () => {
  return (
    //   wrapper는 그냥 CSSModule.Module.css에 있는애/ 'something'은 global로 CSSModule.module.css에 선언된애
    // global로 선언해놓으면 바로 className으로 쓸 수 있나봥
    <div className={cx("wrapper", "inverted")}>
      안녕하세용 저는 <span className="something">CSS Module</span> 입니다.
    </div>
  );
};

export default CSSModule;
