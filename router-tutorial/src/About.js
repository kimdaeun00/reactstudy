import React from "react";
import qs from "qs";

const About = ({ location }) => {
  // 쿼리는 string이다. query의 location.search값을 parse해서 파라미터 확인
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // 문자열 맨 앞의 '?' 생략
  });
  // query는 string으로 들어오기 때문에 query.detail을 바로쓰는게 아니라 'true' string과 비교해야 함
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
