import React from "react";
import styled from "styled-components";
import Country from "./components/Country";

const Country = styled.button`
  margin-top: 1rem;
  color: black;
  background-color: white;
  margin: 0.1rem;
  display: flex;
  font-family: "Consolas";
  &:hover {
    background-color: darkseagreen;
  }
`;
const CountryList = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  color: black;
  font-family: "Consolas";
`;
const Countries = [
  {
    name: "South Korea",
  },
  {
    name: "USA",
  },
  {
    name: "Germany",
  },
  {
    name: "Hong Kong SAR",
  },
  {
    name: "Austrailia",
  },
];

const App = () => {
  return (
    <div>
      <CountryList>
        Select Country.
        {Countries.map((c) => (
          <Country key={c.name} name={c.name} to={`/${c.name}`}>
            {c.name}
          </Country>
        ))}
      </CountryList>
    </div>
  );
};

export default App;
