import { Link } from "react-router-dom";
import { useState } from "react";

export default function Main() {
  const [searchInput, setSearchInput] = useState("");

  function handleChange(e) {
    setSearchInput(e.target.value);
  }

  return (
    <>
      <h1>사람 검색 ㄱㄱ</h1>
      <input type="text" name="userName" onChange={handleChange} />
      <Link to={`/users/${searchInput}`}>
        <button>검색</button>
      </Link>
    </>
  );
}
