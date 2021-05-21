import React from "react";
import styled from "styled-components";

const MiseItemBlock = styled.div`
  display: flex;
  justify-content: center;
  background-color: darkseagreen;
  border-radius: 1rem;
  margin: 4rem;
  min-height: 200px;
  min-width: 700px;
  overflow: auto;
  .contents {
    font-family: "D2Coding";
    color: white;
    font-size: 2rem;
  }
`;

const MiseItem = ({ cityinfo }) => {
  const { data } = cityinfo;
  return (
    <MiseItemBlock>
      <div className="contents">
        <h2>{data.city}</h2>
        <p>오늘 날짜 {data.current.weather.ts}</p>
        <p>현재 기온 {data.current.weather.tp}</p>
        <p>현재 미세먼지 농도 {data.current.pollution.aqius}</p>
      </div>
    </MiseItemBlock>
  );
};

export default MiseItem;
