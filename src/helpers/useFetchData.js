import { useState, useEffect } from "react";

const useFetchData = (id) => {

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const url = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      setState({
        ...state,
        isLoading: true,
      });

      try {
        const resp = await fetch(url);
        const data  = await resp.json();

        setState({
          data,
          isLoading: false,
          hasError: null,
        });
      } catch (error) {
        setState({
          data: null,
          isLoading: false,
          hasError: error.message || "Error ocurrido",
        });
      }
    };

    fetchData();
  }, [id]);

  return state;
};

export default useFetchData;
