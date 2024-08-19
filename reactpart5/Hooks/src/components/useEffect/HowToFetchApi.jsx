import React, { useEffect, useState } from "react";

const HowToFetchApi = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const api = () => {
    fetch("https://pokeapi.co/api/v2/pokemons/pikachu")
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false)
        setError(error)
      });
  };

  useEffect(() => {
    api();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <h1>{apiData.name}</h1>
    </>
  );
};

export default HowToFetchApi;
