import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "../providers/AuthProvider"

const RequireAuth = () => {
  const auth = useContext(AuthContext)
  if(!auth.authenticated) {
    return <Navigate to='/' />
  }
  return (
    <div>
      <h1> Hello, {auth.email}</h1>
      <p>You are Authenticated</p>
      <Outlet />
    </div>
  )
}
export default RequireAuth;