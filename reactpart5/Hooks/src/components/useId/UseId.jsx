import { useId } from "react"

const UseId = () => {
    const userId = useId()
    const passwordId = useId()
  return (
    <div>
      <form>
        <div>
            <label htmlFor={userId}>User Name</label>
            <input type="text" id={userId} />
        </div>
        <div>
            <label htmlFor={passwordId}>User Name</label>
            <input type="text" id={passwordId} />
        </div>
      </form>
    </div>
  )
}

export default UseId
