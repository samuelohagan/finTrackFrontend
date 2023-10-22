import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check for token when the component mounts
  useEffect(() => {
    const token = Cookies.get('jwtToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // Update isAuthenticated when it changes
  const setAuth = (auth) => {
    setIsAuthenticated(auth);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
