import React, { useEffect, useState } from "react";
import apiData from "../API/api";

const FetchOld = () => {
  const [dataApi, setDataApi] = useState([]);

  const getDataApi = async () => {
    try {
      const response = await apiData();
      console.log(response.data);
      setDataApi(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getDataApi();
  }, []);

  return (
    <div>
      {dataApi.slice(0, 10).map((item, index) => {
        return <div key={index}>{item.title}</div>;
      })}
    </div>
  );
};

export default FetchOld;
