import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/store/store";
import { selectAuthData } from "../redux/auth/auth.selectors";

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
  outlet: JSX.Element;
};

// 
export default function ProtectedRoute({authenticationPath, outlet}: ProtectedRouteProps) {
  const authUserData = useAppSelector(selectAuthData);
  const isAuthenticated = authUserData || (!!localStorage.getItem('token'));
  // Authorized condition to redirect the user to login
  if(isAuthenticated) {
    return outlet;
  } else if(window.location.pathname !== "/login" && !isAuthenticated){
    return <Navigate to={{ pathname: authenticationPath }} />;
  }else {
    return <Navigate to={{ pathname: "/login" }} />;
  }
};