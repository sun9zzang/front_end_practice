import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <h1>not found bro</h1>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </>
  );
}
