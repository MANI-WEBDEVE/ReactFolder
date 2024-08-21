import { useBioProvider } from "./ContextApi"


const Home = () => {

    const {data, data2} = useBioProvider()

  return (
    <div className="text-2xl">
      My Name is: {data} and my age is: {data2}
    </div>
  )
}

export default Home
