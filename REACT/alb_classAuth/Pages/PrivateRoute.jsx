import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";



function PrivateRoute({children}){

const [state] = useContext(AuthContext)

if(!state.isAuth){
  return <Navigate to='/'/>
}
return children

}

export default PrivateRoute;