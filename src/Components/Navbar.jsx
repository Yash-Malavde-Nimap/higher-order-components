// /* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Navbar = () => {


  const { logout } = useContext(UserContext);

  return (
    <nav style={{ padding: "10px", backgroundColor: "#333", color: "#fff", position:'sticky' }}>
      <Link
        to="/"
        style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}
      >
        Home
      </Link>{" "}
      |
      <Link
        to="/dashboard"
        style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}
      >
        Dashboard
      </Link>{" "}
      |
      <Link
        to="/login"
        style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}
      >
        Login
      </Link>{" "}
      |
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
    </nav>
  );
};

export default Navbar;
