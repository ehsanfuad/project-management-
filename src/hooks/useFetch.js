import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [res, setRes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL + url, {
          headers: {
            Authorization: localStorage.getItem("jwt")
              ? "bearer " + localStorage.getItem("jwt")
              : "bearer " + process.env.REACT_APP_API_TOKEN,
          },
        });
        // const response = await fetch(url);
        const data = await response.json();
        setRes(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { res, loading, error };
};

export default useFetch;
