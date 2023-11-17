import { useState } from "react";
import Pagination from "./pagination";

// paginacija postoji samo ako je reusult array veci od nule
// prvo i drugo dugme rade samo ako je broj quotova veci od 1

const Class26 = () => {
  const [data, setData] = useState({});
  const [searchQ, setSearchQ] = useState("");
  const [quotesPerPage, setquotesPerPage] = useState(20);

  const getQuote = async () => {
    try {
      if (searchQ === "") {
        return;
      }
      let apiURL = "https://api.quotable.io/search/quotes";

      apiURL += "?query=" + searchQ;
      apiURL += "&limit=" + quotesPerPage;

      const response = await fetch(apiURL);
      const responseData = await response.json();

      setData(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  const nextPage = async () => {
    try {
      if (searchQ === "") {
        return;
      }
      if (data.page === data.totalPages) {
        return;
      }

      let apiURL = "https://api.quotable.io/search/quotes";

      const toNextPage = data?.page + 1;

      apiURL += "?query=" + searchQ;
      apiURL += "&page=" + toNextPage;
      apiURL += "&limit=" + quotesPerPage;

      const response = await fetch(apiURL);
      const responseData = await response.json();

      setData(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  const previousPage = async () => {
    try {
      if (searchQ === "") {
        return;
      }
      if (data.page === 1) {
        return;
      }

      let apiURL = "https://api.quotable.io/search/quotes";

      const toNextPage = data?.page - 1;

      apiURL += "?query=" + searchQ;
      apiURL += "&page=" + toNextPage;
      apiURL += "&limit=" + quotesPerPage;

      const response = await fetch(apiURL);
      const responseData = await response.json();

      setData(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  const navigatePage = async (page) => {
    try {
      if (searchQ === "") {
        return;
      }
      if (data.page === page) {
        return;
      }

      console.log("nesto123");

      let apiURL = "https://api.quotable.io/search/quotes";

      const toNextPage = page;

      apiURL += "?query=" + searchQ;
      apiURL += "&page=" + toNextPage;
      apiURL += "&limit=" + quotesPerPage;

      const response = await fetch(apiURL);
      const responseData = await response.json();

      setData(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);

  return (
    <div>
      <input
        value={searchQ}
        type="text"
        placeholder="query"
        onChange={(e) => setSearchQ(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            getQuote();
          }
          if (e.key === "Escape") {
            setSearchQ("");
            setData({});
          }
        }}
      />
      <p>Elements per page</p>
      <input
        type="number"
        placeholder="quotes per page"
        value={quotesPerPage}
        onChange={(e) => setquotesPerPage(e.target.value)}
        min={0}
        max={150}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            getQuote();
          }
        }}
      />
      <button onClick={getQuote}>Get quote</button>

      <div>
        {data && data.results?.length === 0 && <p>No quotes found</p>}
        {data?.results?.map((quote) => {
          return (
            <div
              key={quote._id}
              style={{
                border: "1px black solid",
                padding: 10,
                marginBottom: 10,
                borderRadius: 4,
              }}
            >
              <p>{quote.author}</p>
              <p>{quote.content}</p>
            </div>
          );
        })}
        <Pagination
          page={data?.page}
          totalPages={data?.totalPages}
          previousPage={previousPage}
          nextPage={nextPage}
          navigatePage={navigatePage}
        />
      </div>
    </div>
  );
};

export default Class26;
