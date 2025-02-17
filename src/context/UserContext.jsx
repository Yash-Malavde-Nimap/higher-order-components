/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

function UserContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("authToken"));

  const navigate = useNavigate();

  // LOGIN FUNCTIONALITY
  const login = (email, password) => {
    const token = "182y49h4193h4u91394939214h9h3h9h";

    if (!email) {
      alert("Please Enter Proper Email ID");
    }

    if (!password) {
      alert("Please Enter proper Password");
    }

    const payload = {
      email: email,
      password: password,
      token,
    };

    if (payload.email.length > 0) {
      localStorage.setItem("authToken", token);
      navigate("/dashboard");
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
