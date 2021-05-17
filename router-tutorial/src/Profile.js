import React from "react";
import { withRouter } from "react-router";
import WithRouterSample from "./WithRouterSample";

const data = {
  kimdaeun: {
    name: "daeun",
    description: "student",
  },
  navi: {
    name: "naviworks",
    description: "company",
  },
};

const Profile = ({ match }) => {
  // url 파라미터 받아오기
  //   match.params는  url path로 넘겨진 파라미터 객체가 넘겨진다.여기서 :username
  // username ==='kimdaeun, navi'가 오는거임
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
};

export default withRouter(Profile);
