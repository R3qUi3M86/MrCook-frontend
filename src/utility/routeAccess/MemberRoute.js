import { Navigate } from "react-router-dom"
import useLocalStorage from "../useLocalStorage"

const MemberRoute = ({children}) => {
    const [userDetails] = useLocalStorage({
        member: false,
        banned: false,
        productComment: false
    }, "userDetails");
    return !userDetails.member || userDetails.banned ? <Navigate to={"/"}/> : children
}

export default MemberRoute;