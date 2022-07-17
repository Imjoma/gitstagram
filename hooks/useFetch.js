import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [state, setState] = useState({
    repos: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    setState({
      repos: null,
      loading: true,
      error: null,
    });

    const getData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setState({
          repos: data,
          loading: false,
        });
      } catch {
        setState({
          repos: null,
          loading: false,
          error: true,
        });
      }
    };

    const safeFetch = url.includes("https");

    if (safeFetch) {
      getData();
    } else {
      setState({
        repos: null,
        loading: false,
        error: "Avoid fetching repo of none existing account",
      });
    }
  }, [url]);

  return state;
};

export default useFetch;
