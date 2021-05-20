import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const categories = [
  {
    name: 'all',
    text: '전체보기',
  },
  {
    name: 'business',
    text: '비즈니스',
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'science',
    text: '과학',
  },
  {
    name: 'sports',
    text: '스포츠',
  },
  {
    name: 'technology',
    text: '기술',
  },
];
// CategoriesBlock이라는 컴포넌트 안의 div 태그들을 이 스타일로 설정한다!
// styled-components 쓰는 이유: div className=CategoriesBlock을 만들면서 바로 styling가능
const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

//NavLink 컴포넌트를 스타일링
// 괄호 안에 NavLink를 넣어놨음@ Category 컴포넌트가 NavLink라는 뜻
const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;
  &:hover {
    color: #495057;
  }
  /* NavLink의 경우 선택되었을 때 active라는 클래스를 가진다.  */
  &.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }

  & + & {
    margin-left: 1rem;
  }
`;

const Categories = () => {
  return (
    // CategoriesBlock도 그냥 Categories.js안에서 style을 위해서 선언해준 컴포넌트
    <CategoriesBlock>
      {categories.map((c) => (
        // Category는 어떤 역할을 하는 component는 아니고 그냥
        // style을 따로 해줄려고 이렇게 component를 만들어준듯
        <Category
          key={c.name}
          activeClassName="active"
          exact={c.name === 'all'}
          to={c.name === 'all' ? '/' : `/${c.name}`}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
