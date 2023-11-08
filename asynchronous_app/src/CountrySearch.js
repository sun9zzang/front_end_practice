import { useState } from "react";
import LoadingSpinner from "./resources/Spin-1s-200px.gif";

export default function CountrySearch() {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [lastSearchPhrase, setLastSearchPhrase] = useState(null);
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleInputChange(e) {
    // console.log("search input: " + e.target.value);
    setSearchPhrase(e.target.value);
  }

  async function handleClick() {
    setError(null);
    setIsLoading(true);
    setLastSearchPhrase(searchPhrase);

    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${searchPhrase}`
      );
      if (response.status === 404) {
        setSearchResult([]);
        throw new Error("검색 결과가 없습니다.");
      }

      const data = await response.json();

      const convertedSearchResult = data.map((countryData) => {
        return {
          cca3: countryData.cca3,
          name: countryData.name,
          flag: countryData.flags,
          capital: countryData.capital,
        };
      });

      setSearchResult(convertedSearchResult);
    } catch (error) {
      // console.log(error.message);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="section-countrysearch">
      <div className="form">
        <FormTitle />
        <div className="form-search">
          <SearchInput onChange={handleInputChange} />
          <SearchButton onClick={handleClick} />
        </div>
      </div>
      <SearchResult
        isLoading={isLoading}
        error={error}
        searchResult={searchResult}
        lastSearchPhrase={lastSearchPhrase}
      />
    </section>
  );
}

function FormTitle() {
  return <h1 className="form-title">나라 검색 서비스</h1>;
}

function SearchInput({ onChange }) {
  return (
    <input
      type="text"
      className="form-search-input"
      placeholder="검색할 나라명을 입력하세요."
      onChange={onChange}
    ></input>
  );
}

function SearchButton({ onClick }) {
  return (
    <button className="form-search-button" onClick={onClick}>
      검색
    </button>
  );
}

function SearchResult({ isLoading, error, searchResult, lastSearchPhrase }) {
  return (
    <div className="result">
      {lastSearchPhrase && (
        <h2 className="result-searchphrase">{`"${lastSearchPhrase}" 검색 결과`}</h2>
      )}
      {!isLoading && searchResult?.length > 0 && (
        <SearchResultList searchResult={searchResult} />
      )}
      {/* {!isLoading && searchResult?.length === 0 && !error && (
        <SearchResultNotFound />
      )} */}
      {!isLoading && error && <SearchResultError error={error} />}
      {isLoading && <SearchLoading />}
    </div>
  );
}

function SearchResultList({ searchResult }) {
  return (
    <ul className="result-list">
      {searchResult.map((countryData) => (
        <li key={countryData.cca3} className="result-item">
          <div className="result-item-flag">
            <img src={countryData.flag.png} alt={countryData.flag.alt}></img>
          </div>
          <div className="result-item-info">
            <div className="result-item-name-common">
              <span>{countryData.name.common}</span>
            </div>
            <div className="result-item-name-official">
              <span>{countryData.name.official}</span>
            </div>
            <div className="result-item-capital">
              <span>수도: {countryData.capital.join(", ")}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

function SearchResultError({ error }) {
  return <h2 className="result-error">{error}</h2>;
}

function SearchLoading() {
  return (
    <div className="result-loading">
      <img
        className="result-loading-spinner"
        src={LoadingSpinner}
        alt="Loading spinner"
      ></img>
      <h2 className="result-loading-desc">로딩 중이에용</h2>
    </div>
  );
}
