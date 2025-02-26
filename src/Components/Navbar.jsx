// /* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { logout } = useContext(UserContext);

  const location = window.location.href;

  return (
    <>
      {!(location === "http://localhost:5173/dashboard") && <nav
        style={{
          padding: "30px",
          backgroundColor: "#000000cf",
          blur: "100px",
          color: "#fff",
          position: "fixed",
          top: "0px",
          width:'1480px',
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}
        >
          Home
        </Link>
        <Link
          to="/dashboard"
          style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}
        >
          Dashboard
        </Link>
        <Link
          to="/login"
          style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}
        >
          Login
        </Link>
        {location === "http://localhost:5173/dashboard" && (
          // location === "http://localhost:5173/login"
          <button
            onClick={logout}
            style={{
              backgroundColor: "#ff6347",
              color: "#fff",
              border: "none",
              padding: "5px 10px",
              cursor: "pointer",
              marginLeft: "10px",
            }}
          >
            Logout
          </button>
        )}
      </nav>}
    </>
  );
};

export default Navbar;
