import { Navigate } from "react-router-dom"

//if the user exist, return children, else send back to homepage
export const ProtectedRoute = ({children, user}) => {
  console.log(user)
  return user? children : <Navigate to='/'></Navigate>
}