import { React } from "react";
import UserContaxt from "./UserContaxt";

const UserContextProvider = ({Children}) => {
    const [data, setdata] = useState({})
    return (
        <UserContaxt.Provider value={{data, setdata}} >
        {Children}
        </UserContaxt.Provider>
    )
}

export default UserContextProvider