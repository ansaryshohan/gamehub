import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const RestrictedRoute = ({children}) => {
  const {user}= useAuthContext();

  if(!user?.email){
    return (
      <>{children}</>
    )
  }
  return <Navigate to={window.location.pathname} replace />
  
}

export default RestrictedRoute