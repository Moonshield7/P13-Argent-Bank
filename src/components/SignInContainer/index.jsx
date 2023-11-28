import { useDispatch } from "react-redux";
import { login } from "../../utils/features/users";
import { useState } from "react";
import { fetchLogin, fetchUser } from "../../services/api.js"
import { useNavigate } from "react-router";

function SignInContainer () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  async function handleSubmit(e){
    e.preventDefault();
    try {
      const verifyUser = await fetchLogin(email, password)
    
        setErrorLogin(false)
        const userData = await fetchUser(verifyUser.body.token);
        dispatch(login({
          email: email,
          password: password,
          firstname: userData.firstName,
          lastname: userData.lastName,
          loggedIn: true,
          token: verifyUser.body.token,
        }));
        navigate('/profile')
    }
    catch {
      setErrorLogin(true);
    }
  }

  return (
    <main className="main bg-dark" style={{minHeight: "75vh", paddingTop: "3rem"}}>
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="input-wrapper">
            <label htmlFor="username">Email</label><input type="text" id="username" onChange= {(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label><input type="password" id="password"  onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
          </div>
          {errorLogin === false ? "" : <div className="login-error">Email ou mot de passe   incorrect</div>}
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  )
}

export default SignInContainer;