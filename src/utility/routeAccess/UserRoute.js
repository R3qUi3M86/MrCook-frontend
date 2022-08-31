import { Navigate } from "react-router-dom"
import useLocalStorage from "../useLocalStorage"

const UserRoute = ({children}) => {
    const [userDetails] = useLocalStorage({
        member: false,
        banned: false,
        productComment: false
    }, "userDetails");
    return !userDetails.id ? <Navigate to={"/"}/> : children
}

export default UserRoute;