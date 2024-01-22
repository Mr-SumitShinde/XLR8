import React from "react";
import { useAuth } from "../context/AuthContext";

function LoginComponet() {
  const { user, setUser, isLoggedIn, setIsloggedIn } = useAuth();

  const login = (e) => {
    e.preventDefault();
    setIsloggedIn(true);
    setUser({
      name: "sumit shinde",
      funds: "11000",
    });
  };

  const loggedOut = (e) => {
    e.preventDefault();
    setIsloggedIn(false);
    setUser(null);
  };
  return <div>
    <h1>Test</h1>
    <span>{isLoggedIn? (<h1>{user.name}</h1>): (<>logged In please</>)}</span>
    <br/>
    {isLoggedIn? <button onClick={(e)=>loggedOut(e)}>Log Out</button> :<button onClick={(e)=>login(e)}>Log In</button>}
    
    
  </div>;
}

export default LoginComponet;
