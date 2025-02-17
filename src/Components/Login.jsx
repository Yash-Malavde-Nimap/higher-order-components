/* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const { login, isAuthenticated } = useContext(UserContext);
  
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, []);

  // Login Button
  const handleLogin = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // LOGIN FUNCTIONALITY FROM USERCONTEXT
    login(email, password);
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#424242",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          padding: "40px",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            color: "#2c3e50",
            marginBottom: "20px",
          }}
        >
          Login to Your Account
        </h2>
        <input
          type="email"
          placeholder="Enter Username"
          ref={emailRef}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            border: "1px solid #bdc3c7",
            borderRadius: "5px",
            fontSize: "16px",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
        <input
          type="password"
          placeholder="Enter Password"
          ref={passwordRef}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "25px",
            border: "1px solid #bdc3c7",
            borderRadius: "5px",
            fontSize: "16px",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#3498db",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            fontSize: "18px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#2980b9")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#3498db")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
