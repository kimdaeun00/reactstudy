import React, { useState, useEffect } from "react";
import MiseItem from "./MiseItem";
import styled from "styled-components";
import axiios from "axios";

const MiseListBlock = styled.div`
  @media screen {
    width: 100%;
  }
`;

const sampleMise = {
  status: "success",
  data: {
    city: "Chilgok",
    state: "Gyeongsangbuk-do",
    country: "South Korea",
    location: {
      type: "Point",
      coordinates: [128.70116000000002, 35.7024],
    },
    current: {
      weather: {
        ts: "2021-05-21T03:00:00.000Z",
        tp: 20,
        pr: 1007,
        hu: 60,
        ws: 2.06,
        wd: 270,
        ic: "04d",
      },
      pollution: {
        ts: "2021-05-21T02:00:00.000Z",
        aqius: 46,
        mainus: "o3",
        aqicn: 35,
        maincn: "o3",
      },
    },
  },
};

const MiseList = () => {
  return (
    <MiseListBlock>
      <MiseItem cityinfo={sampleMise} />
      <MiseItem cityinfo={sampleMise} />
    </MiseListBlock>
  );
};

export default MiseList;
