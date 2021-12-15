import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Protected = () => {
  const auth = useContext(AuthContext)

  return(
    <div>
      <h1>Protected</h1>
      <p>email: {auth.email}</p>
      {auth.authenticated && <p>Is Logged In</p>}
      {!auth.authenticated && <p>Error should not be here</p>}
    </div>
  );
};

export default Protected;