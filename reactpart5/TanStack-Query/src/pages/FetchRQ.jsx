import { useQuery } from "@tanstack/react-query";
import apiData from "../API/api";
import { NavLink } from "react-router-dom";
import "./index.css"
const FetchRQ = () => {
  const getDataApi = async () => {
    try {
      const response = await apiData();
      return response.status === 200 ? response.data : console.log("error");
    } catch (error) {
      console.log(error.message);
    }
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"], //* key --> useState like "posts"
    queryFn: getDataApi, //* fn --> useEffect like () => {}
    refetchInterval: "0.002",
    // * gcTime: "10s", //* cache time
    // staleTime: "10000", //* stale time --> 10s
    refetchIntervalInBackground: true,
  });

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
    </div>
  );
};
export default FetchRQ;
