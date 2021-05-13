import React from "react";
import styled, { css } from "styled-components";
// styled-components 라이브러리의 장점 : props를 style에 적용할 수 있다

const Box = styled.div`
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
  width: 1024px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

// Button에 대한 style
const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  // hover와 button이 같이 쓰이는 경우의 background를 설정
  /* hover : 마우스 커서가 올라가 있다 */
  &:hover {
    background: rgba(255, 255, 255, 0.7);
  }

  ${(props) =>
    // inverted 값이 true일 때 스타일을 설정
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => (
  <Box color="black">
    <Button> 안쪽흰색 </Button>
    <Button inverted={true}> 테두리만 </Button>
  </Box>
);

export default StyledComponent;
