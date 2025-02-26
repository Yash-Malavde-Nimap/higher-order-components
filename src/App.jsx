import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login.jsx";
import Dashboard from "./Components/Dashboard.jsx";
import Home from "./Components/Home.jsx";
import withAuth from "./authUtils/withAuth.jsx";
import Navbar from "./Components/Navbar.jsx";

function App() {
  const ProtectedDashboard = withAuth(Dashboard);

  return (
    <>
      {/* <Router>
        <UserContextProvider> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<ProtectedDashboard />} />
      </Routes>
      {/* </UserContextProvider>
      </Router> */}
    </>
  );
}

export default App;
