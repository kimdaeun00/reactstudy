import React from "react";
import { Link, Route } from "react-router-dom";
import Profile from "./Profile";
// import WithRouterSample from "./WithRouterSample";

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록 : </h3>
      <ul>
        <li>
          <Link to="/profiles/kimdaeun">kimdaeun</Link>
        </li>
        <li>
          <Link to="/profiles/navi">naviworks</Link>
        </li>
      </ul>

      {/* /profiles에서 프로필 링크를 보여주는 라우트 컴포넌트. 이 밑에 코드는 왜있는거지?? */}
      {/* <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해 주세용.</div>}
      /> */}
      {/* Profile 컴포넌트를 서브 라우트로 사용 */}
      {/* 그냥 원래 한번에 /profiles/username으로 가던걸 두 단계로 거쳐서 간다느 ㄴ느낌인듯~~ */}
      <Route path="/profiles/:username" component={Profile} />

      {/* Route가 아니라 그냥 컴포넌트인데오 withRouter를 통해서 location, match, history 사용 가능 */}
      {/* 현재 자신을 부른 컴포넌트 (지금 : Profiles.js) 를 부른다.  */}
      {/* <WithRouterSample /> */}
    </div>
  );
};

export default Profiles;
