import { useState, useEffect } from 'react';

// 어떤 promiseCreator를 하기 위한 함수임, deps는 의존 배열(useEffect에서 사용할)
export default function usePromise(promiseCreator, deps) {
  // promiseCreator를 실행하는 데의 상태 (이 상태들을 리턴)
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  // 왜 굳이 process를 따로 만들었는가?? useEffect에 등록하는 함수는 async로 바로 작성하면 안되고 함수 내부에 async를 따로 만들어줘야함
  // (async는 promise객체를 리턴하는데, useEffect는 무조건 함수를 리턴해야 하기 때문)
  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        setResolved(resolved);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
  }, deps);
  return [loading, resolved, error];
}

//   // useEffect를 사용하여 렌더링 될 때마다 fetchData()를 하도록 실행.
//   //   지금은 useEffect함수의 return이 없어서 상관없는데 return문에 쓰이는 것은 뒷정리 함수
//   useEffect(() => {
//     // fetchData = 데이터를 state articles에 로딩하는 함수
//     // 왜 굳이 fetchData를 따로 만들었는가?? useEffect에 등록하는 함수는 async로 바로 작성하면 안되고 함수 내부에 async를 따로 만들어줘야함
//     // (async는 promise객체를 리턴하는데, useEffect는 무조건 함수를 리턴해야 하기 때문)
//     const fetchData = async () => {
//       //처음에 loading==true로..
//       setLoading(true);
//       try {
//         // api로부터 json값 받아오기
//         // 비동기로 처리되는 부분 앞에 await를 붙인다. await뒷부분은 promise를반환한다. async function 자체도 promise를 반환
//         const query = category === 'all' ? '' : `&category=${category}`;
//         const response = await axios.get(
//           `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=33c5cc4c443847ab830117068e8b48a7`,
//         );
//         // state articles를 json파일을 .articles로 저장함
//         setArticles(response.data.articles);
//       } catch (e) {
//         console.log(e);
//       }
//       setLoading(false);
//     };
//     fetchData();
//   }, [category]);
