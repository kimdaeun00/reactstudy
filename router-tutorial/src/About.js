import React from "react";
import qs from "qs";

const About = ({ location }) => {
  // 쿼리는 string이다. query의 location.search값을 parse해서 파라미터 확인
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const showDetail = query.detail === "true";
  return (
    <div>
      <h1> 소개 </h1>
      <p>리액트 라우터 기초</p>
      {showDetail && <p>detail값==true</p>}
    </div>
  );
};

export default About;
