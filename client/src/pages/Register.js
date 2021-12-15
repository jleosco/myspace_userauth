import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const navigate = useNavigate()
  const {handleRegister} = useContext(AuthContext)
  const [email, setEmail] = useState('test@test.com')
  const [password, setPassword] = useState('123456')
  const [passwordConfirm, setPasswordConfirm] = useState('123456')

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password !== passwordConfirm) {
      alert("Passwords Don't Match")
      return
    }
    handleRegister({email, password}, navigate)
  }
  return (
  <>
    <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <p>Email</p>
        <input value={email} onChange={(e) => {setEmail(e.target.value)}}/>
        <p>Password</p>
        <input value={password} onChange={(e) => {setPassword(e.target.value)}}/>
        <p>Confirm Password</p>
        <input value={passwordConfirm} onChange={(e) => {setPasswordConfirm(e.target.value)}}/>
        <button>Register</button>
      </form>
  </>
  )
}

export default Register;