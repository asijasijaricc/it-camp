export const formatUrl = (params) => {
  const { url, query, perPage, page, fields } = params;
  let localUrl = url;
  localUrl += "?query=" + query;
  localUrl += "&page=" + perPage;
  if (page) {
    localUrl += "&limit=" + page;
  }

  if (fields) {
    localUrl += "&fields=" + fields;
  }

  return localUrl;
};
