import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import apiData from "../API/api";

const FetchRQ = () => {
  const getDataApi = async () => {
    try {
      const response = await apiData();
      console.log(response.data);
      return response.status === 200 ?  response.data : console.log("error");
    } catch (error) {
      console.log(error.message);
    }
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"], //* key --> useState like "posts"
    queryFn: getDataApi, //* fn --> useEffect like () => {}
    gcTime: "10s", //* cache time
    // staleTime: "10000", //* stale time --> 10s
  })


 

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error instanceof Error ? error.message : "Error fetching data"}</div>
  if (!data) return <div>No data</div>

 

  return (
    <div>
      {data?.slice(0,10).map((item, index) => {
        return <div key={index}>{item.title}</div>;
      })}
    </div>
  );
};
export default FetchRQ;
