// import './login.css'
// const Login = () => {
//   return (
//     <div>Login</div>
//   )
// }

// export default Login

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;