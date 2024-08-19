import { useContext } from "react"
import { BioContext } from "./ContextApi"


const Home = () => {

    const {data, data2} = useContext(BioContext)

  return (
    <div>
      My Name is: {data} and my age is: {data2}
    </div>
  )
}

export default Home
