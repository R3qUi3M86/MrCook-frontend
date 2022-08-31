import { Navigate } from "react-router-dom"
import useLocalStorage from "../useLocalStorage"

const AdminRoute = ({children}) => {
    const [userDetails] = useLocalStorage({
        member: false,
        banned: false,
        productComment: false
    }, "userDetails");
    return userDetails.roles!=="ADMIN" ? <Navigate to={"/"}/> : children
}

export default AdminRoute;