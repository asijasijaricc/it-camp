import axios from "axios";
import { formatUrl } from "./util";

const quoteApi = axios.create({
  baseURL: "https://api.quotable.io",
});

export const getQuote = async (query, perPage) => {
  const url = formatUrl({ url: "/search/quotes", query, perPage });

  return quoteApi.get(url);
};

export const navigatetoPage = async (query, perPage, page) => {
  const url = formatUrl({ url: "/search/quotes", query, perPage, page });

  return quoteApi.get(url);
};
