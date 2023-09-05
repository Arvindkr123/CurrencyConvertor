import React, { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});
  const [error, setError] = useState();

  let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch data for ${currency}`);
        }
        return response.json();
      })
      .then((response) => {
        setData(response[currency]);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [currency]);

  if (error) {
    return { error };
  }

  return data;
};

export default useCurrencyInfo;
