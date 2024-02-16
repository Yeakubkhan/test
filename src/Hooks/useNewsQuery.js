import { useEffect, useState } from "react";

const useNewsQuery = (catagory, query) => {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    const fetchingData = async () => {
      try {
        setIsLoading(true);

        const response = query
          ? await fetch(`http://localhost:8000/v2/search?q=${query}`)
          : await fetch(
              `http://localhost:8000/v2/top-headlines?category=${catagory}`
            );
        if (!response.ok) {
          const errorMessage = `Data not found ${response.status}`;
          throw new error(errorMessage);
        }
        const data = await response.json();
        if (!ignore) {
          setNewsData(query ? data?.result : data?.articles);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchingData();

    return () => (ignore = true);
  }, [error, query, catagory]);

  return {
    newsData,
    isLoading,
    error,
  };
};

export default useNewsQuery;
