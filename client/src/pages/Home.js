import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
  const auth = useContext(AuthContext)
  return(
    <div>
      <h1>Home</h1>
      {JSON.stringify(auth)}
      <br />
      <br />
      <button onClick={auth.handleLogin}>Login</button>
      <button onClick={auth.handleLogout}>Logout</button>
    </div>
  );
};

export default Home;