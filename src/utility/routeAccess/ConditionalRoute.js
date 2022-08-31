import { Navigate } from "react-router-dom"
import useLocalStorage from "../useLocalStorage"

const ConditionalRoute = ({children}) => {
    const [jwt]  = useLocalStorage("", "jwt")
    return jwt ? <Navigate to={"/"}/> : children
}

export default ConditionalRoute