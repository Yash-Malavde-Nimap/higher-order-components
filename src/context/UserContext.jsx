/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

function UserContextProvider({ children }) {
  const boolean = JSON.parse(localStorage.getItem("authToken"));
  const [isAuthenticated, setIsAuthenticated] = useState(boolean || "" );

  const navigate = useNavigate();

  console.log(window.location.href);

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [boolean]);

  // LOGIN FUNCTIONALITY
  const login = (email, password) => {
    const token = "182y49h4193h4u91394939214h9h3h9h";

    if (!email || !email.includes("@")) {
      alert("Please Enter Proper Email ID");
      return;
    }

    if (!password || password.length < 8) {
      alert("Please Enter proper Password");
      return;
    }

    const payload = {
      email: email,
      password: password,
      token,
    };

    if (payload.email.length > 0) {
      localStorage.setItem("authToken", JSON.stringify(token));
      navigate("/dashboard");
      window.location.reload();
    }
  };

  // LOGOUT FUNCTIONALITY
  const logout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
