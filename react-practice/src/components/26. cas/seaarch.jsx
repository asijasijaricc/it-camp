import { useState } from "react";

const Search = () => {
  const [data, setData] = useState([]);
  const [quotes, setQuotes] = useState("");

  const getQuote = async () => {
    try {
      let apiURL = "https://api.quotable.io/search/quotes";

      const toNextP = data?.page + 1;

      apiURL += "?query=" + quotes;
      apiURL += "&page=" + toNextP;

      const response = await fetch(apiURL);
      const responseData = await response.json();

      setData(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        name="qoutes"
        placeholder="qoutes"
        value={quotes}
        onChange={(e) => setQuotes(e.target.value)}
      />
      <button onClick={getQuote}>Get quote</button>
      <p>Quote: {data?.quotes}</p>
      <div>
        {data && data.results?.length === 0 && <p>No quotes found</p>}
        {data?.results?.map((quote) => {
          return (
            <div key={quote._id}>
              <div
                style={{
                  border: "1px solid grey",
                  width: "250px",
                  height: "160px",
                  padding: "10px",
                  margin: "10px",
                  borderRadius: "10px",
                }}
              >
                <p>{quote.author}</p>
                <p>{quote.content}</p>
              </div>
            </div>
          );
        })}
        <div style={{ display: "flex", gap: "10px" }}>
          <button>{"<"}</button>
          {data?.totalPages > 1 && (
            <button
              style={{
                backgroundColor: data?.page === 1 ? "white" : "buttonface",
              }}
            >
              1
            </button>
          )}
          {data?.totalPages > 2 && (
            <button>{data?.page > 1 ? data?.page : 2}</button>
          )}
          {data?.totalPages > 3 && <button>{data.totalPages}</button>}
          <button onClick={nextPage}>{">"}</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
