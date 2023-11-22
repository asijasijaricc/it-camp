import { useState } from "react";
import Pagination2 from "./pagiantion2";
import { navigatetoPage } from "./api";

const Search2 = () => {
  const [data, setData] = useState({});
  const [searchQ, setSearchQ] = useState("");
  const [quotesPerPage, setquotesPerPage] = useState(20);

  const getQuoteLocal = async () => {
    try {
      if (searchQ === "") {
        return;
      }
      const responseData = await getQuote(searchQ, quotesPerPage);

      setData(responseData.data);
    } catch (error) {
      console.log(error);
    }
  };

  //   const nextPage = async () => {
  //     try {
  //       if (searchQ === "") {
  //         return;
  //       }
  //       if (data.page === data.totalPages) {
  //         return;
  //       }

  //       let apiURL = "https://api.quotable.io/search/quotes";

  //       const toNextPage = data?.page + 1;

  //       apiURL += "?query=" + searchQ;
  //       apiURL += "&page=" + toNextPage;
  //       apiURL += "&limit=" + quotesPerPage;

  //       const response = await fetch(apiURL);
  //       const responseData = await response.json();

  //       setData(responseData);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   const previousPage = async () => {
  //     try {
  //       if (searchQ === "") {
  //         return;
  //       }
  //       if (data.page === 1) {
  //         return;
  //       }

  //       let apiURL = "https://api.quotable.io/search/quotes";

  //       const toNextPage = data?.page - 1;

  //       apiURL += "?query=" + searchQ;
  //       apiURL += "&page=" + toNextPage;
  //       apiURL += "&limit=" + quotesPerPage;

  //       const response = await fetch(apiURL);
  //       const responseData = await response.json();

  //       setData(responseData);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const navigatePage = async () => {
    try {
      if (data.page === page) {
        return;
      }
      if (data.page < 0) {
        return;
      }
      if (data.page > data.totalPages) {
        return;
      }
      if (searchQ === "") {
        return;
      }

      const responseData = await navigatetoPage(searchQ, quotesPerPage, page);

      setData(responseData.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);

  const onKeyDown = (e, resetInput) => {
    if (e.key === "Enter") {
      getQuoteLocal();
    }
    if (e.key === "Escape") {
      if (resetInput) resetInput();
    }
  };
};

return (
  <div>
    <input
      value={searchQ}
      type="text"
      placeholder="query"
      onChange={(e) => setSearchQ(e.target.value)}
      onKeyDown={(e) => onKeyDown(e, () => setSearchQ(""))}
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
        onKeyDown();
      }}
    />
    <button onClick={getQuoteLocal()}>Get quote</button>

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
      <Pagination2
        page={data?.page}
        totalPages={data?.totalPages}
        previousPage={() => navigatePage(data.page - 1)}
        nextPage={() => navigatePage(data.page + 1)}
        navigatePage={navigatePage}
      />
    </div>
  </div>
);

export default Search2;
