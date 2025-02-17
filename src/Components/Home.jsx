import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Home = () => {
  const { isAuthenticated } = useContext(UserContext);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#424242",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        color: "#333",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          padding: "30px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          width: "80%",
          maxWidth: "800px",
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            color: "#2c3e50",
            marginBottom: "20px",
          }}
        >
          Welcome to Our Homepage!
        </h1>
        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.6",
            color: "#555",
            marginBottom: "20px",
          }}
        >
          Were so glad youre here. This is a simple homepage designed with
          inline CSS to make things easy and beautiful. Explore our content and
          enjoy the experience!
        </p>

        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <Link
            to="/login"
            style={{
              padding: "12px 20px",
              fontSize: "16px",
              backgroundColor: "#3498db",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#2980b9")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#3498db")}
          >
            Login
          </Link>
          {isAuthenticated && (
            <>
              <Link
                to="/dashboard"
                style={{
                  padding: "12px 20px",
                  fontSize: "16px",
                  backgroundColor: "#3498db",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#2980b9")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#3498db")
                }
              >
                Dashboard
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
