import { useContext } from "react"
import { BioContext } from "./useContextAPI/ContextApi"

function ContextTest() {

    const {data, data2} = useContext(BioContext)

  return (
    <div>
      heloo second : {data}
    </div>
  )
}

export default ContextTest
