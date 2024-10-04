
import { fetchIndvdualData } from "../API/api"
import { useQuery } from "@tanstack/react-query";
import "./index.css"
import { useParams } from "react-router-dom";
const FetchRQIndev =  () => {
    const {id} = useParams()
    // first method to get id and data
    // const dataFormID = async () => {
    //   const urlId = window.location.pathname.split("/").pop();
    //     const data = await fetchIndvdualData(urlId)
    //     return data
    // }



    const {data} = useQuery({
        queryKey: ["postsWithID"],
        queryFn: () => fetchIndvdualData(id)
    })

  return (
    <>
    
    <div className="card">
      <h2>{data?.title}</h2>
      <p>{data?.body}</p>
      <p>ID: {data?.id}</p>
    </div>

          </>
  )
}

export default FetchRQIndev
