import { useState, useEffect } from "react";
import client from "../api/client";

const useFetch = (url, cache = true) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      const cachedData = JSON.parse(localStorage.getItem(url));
      if (cachedData && cachedData.expiry > Date.now()) {
        setData(cachedData.content);
        setIsLoading(false);
        return;
      }
      try {
        const result = await client(url, { method: "GET", secure: true });
        // cache results for 30 seconds
        if (cache) {
          localStorage.setItem(
            url,
            JSON.stringify({
              content: result.data,
              expiry: Date.now() + 1000 * 30,
            })
          );
        }
        setData(result.data);
        setIsLoading(false);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        setIsError(true);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [cache, url]);
  return [data, isLoading, isError];
};

export default useFetch;
