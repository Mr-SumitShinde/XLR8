import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth(){
  return useContext(AuthContext)
}

export function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsloggedIn]= useState(false)


  const contextValue = { user, setUser, isLoggedIn, setIsloggedIn };

  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};

