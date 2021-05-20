import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  // 원래는 비동기 작업을 useEffect를 이용해서 asynch 함수 따로 만들고 했었는데 그 일을 usePromise(custom hook) 에서 해 준다.
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=33c5cc4c443847ab830117068e8b48a7`,
    );
  }, [category]);

  //   대기 중일때..
  if (loading) {
    return <NewsListBlock>대기 중..</NewsListBlock>;
  }
  //   아직 articles 값이 설정되지 않았을 때
  if (!response) {
    return null;
  }
  if (error) {
    return <NewsListBlock>error occurred</NewsListBlock>;
  }

  const { articles } = response.data;
  return (
    //   articles 값이 유효할 때 state articles를 NewsItem으로 map함
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={articles.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
