import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const RestrictedRoute = ({children}) => {
  const {user,loading}= useAuthContext();
  if (loading) {
    return (
      <div className="w-full h-[50vh] flex items-center justify-center">
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  if(!user?.email){
    return (
      <>{children}</>
    )
  }
  return <Navigate to={"/"} replace />
  
}

export default RestrictedRoute