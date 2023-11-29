import {useSelector} from "react-redux"
import {Navigate} from "react-router-dom"
import { selectUser } from "../../utils/features/users";

function ProtectedRoute({children, redirectPath = "/login"}) {
  const user = useSelector(selectUser);
  if(!user) {
      return <Navigate to={redirectPath}  replace />
  }
 return children
}



export default ProtectedRoute;