import { useQuery } from "@tanstack/react-query";
import { paginationWeb } from "../API/api";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./index.css"
const FetchRQ = () => {

  const [pageNumber, setPageNumber] = useState(0)

  // const getDataApi = async () => {
  //   try {
  //     const response = await apiData();
  //     return response.status === 200 ? response.data : console.log("error");
  //   } catch (error) {
  //     console.log(error.message);
  //   } 
  // };

  const pageRefresh = () => {
    const data = useQuery({
      queryKey: ["posts"], //* key --> useState like "posts"
      // queryFn: getDataApi, //* fn --> useEffect like () => {}
      // refetchInterval: "0.002",
      // * gcTime: "10s", //* cache time
      // staleTime: "10000", //* stale time --> 10s
      // refetchIntervalInBackground: true,
      queryFn: () => paginationWeb(pageNumber)
    });
  }
  useEffect(() => {
    pageRefresh()
  }, [pageNumber])

  if (isLoading) return <div>Loading...</div>;
  if (error)
    return (
      <div>
        Error: {error instanceof Error ? error.message : "Error fetching data"}
      </div>
    );
  if (!data) return <div>No data</div>;

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", color:"black" }}>
        {data?.slice(0, 10).map((item, index) => {
          return (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                padding: "1rem",
                borderRadius: "0.5rem",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <NavLink to={`/rq/${item.id}`}>
              <p>{item.id}</p>
              <h3>{item.title}</h3>
              </NavLink>
            </div>
          );
        })}
      </div>
      <button onClick={() => setPageNumber( pageNumber +1 )}>Prev Page</button>
      <p>{pageNumber}</p>
      <button onClick={() => setPageNumber( pageNumber -1 )}>Next page</button>
    </div>
  );
};
export default FetchRQ;
