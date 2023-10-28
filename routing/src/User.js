import { useParams, useNavigate } from "react-router-dom";
import userData from "./userData.json";

export default function User() {
  const { userName } = useParams();
  const foundUser = userData.find((user) => user.username === userName);

  const navigate = useNavigate();

  // console.log(userName);
  // console.log(userData);
  // console.log(foundUser);

  let result = null;
  if (foundUser) {
    result = (
      <>
        <h1>{foundUser.username}님의 정보</h1>
        <p>이름: {foundUser.name}</p>
        <p>이메일: {foundUser.email}</p>
        <p>전화번호: {foundUser.phone}</p>
        <p>웹사이트: {foundUser.website}</p>
      </>
    );
  } else {
    result = <h1>그런 사람은 없어용</h1>;
  }

  return (
    <>
      {result}
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </>
  );
}
