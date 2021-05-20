import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const NewsPage = ({ match }) => {
  // Route로 이동된 컴포넌트기 때문에 match를 받는다.
  // match.params로 전달된 파라미터 확인
  // match.params.category =='all'/'business'/'science' 등등
  // match.params.category 가 비어 있으면 전체 기사를 나타내는것임
  const category = match.params.category || 'all';
  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
