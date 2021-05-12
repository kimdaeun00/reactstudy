import React, { useState } from "react";

const EventPractice = () => {
  // form 자체가 객체를 나타내기 때문에 객체가 갖는 username과 message둘 다 변경 가능함
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  // 얘를 위에다가 선언 안해도 되낭?
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form, // 기존의 form 내용을 여기에 복사한 뒤
      [e.target.name]: e.target.value, // 원하는 값을 덮어씌우기
    }; // nextform 은 함수아님 그냥 설정하는 메소드?
    setForm(nextForm); // setform 으로 form 바꿔주기
  };
  const onClick = () => {
    alert(username + ":" + message);
    setForm({
      username: "",
      message: "",
    });
  };
  const onKeypress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h2>event practice</h2>
      <input
        type="text"
        name="username"
        placeholder="user name"
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="type anything"
        onChange={onChange}
        onKeyPress={onKeypress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
