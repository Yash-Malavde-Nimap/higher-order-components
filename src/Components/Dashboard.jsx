const Dashboard = () => {
  return (
    <div
      style={{ display: "flex", height: "100vh", backgroundColor: "#f4f4f4" }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "250px",
          backgroundColor: "#2C3E50",
          color: "#fff",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#fff" }}>Dashboard</h2>
        <ul style={{ listStyleType: "none", padding: "0" }}>
          <li style={{ margin: "20px 0", fontSize: "18px" }}>
            <a href="#home" style={{ color: "#fff", textDecoration: "none" }}>
              Home
            </a>
          </li>
          <li style={{ margin: "20px 0", fontSize: "18px" }}>
            <a
              href="#settings"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Settings
            </a>
          </li>
          <li style={{ margin: "20px 0", fontSize: "18px" }}>
            <a
              href="#profile"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Profile
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#ecf0f1",
          padding: "20px",
        }}
      >
        {/* Header Section */}
        <div
          style={{
            backgroundColor: "#3498db",
            color: "#fff",
            padding: "10px",
            textAlign: "center",
            marginBottom: "20px",
            fontSize: "24px",
          }}
        >
          Welcome to the Dashboard
        </div>

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "80%",
              backgroundColor: "#fff",
              padding: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              marginBottom: "20px",
              borderRadius: "8px",
            }}
          >
            <h3>Latest Updates</h3>
            <ul>
              <li style={{ marginBottom: "10px" }}>
                Update 1: New feature added
              </li>
              <li style={{ marginBottom: "10px" }}>
                Update 2: Bug fixes in the system
              </li>
              <li style={{ marginBottom: "10px" }}>
                Update 3: User interface improvements
              </li>
            </ul>
          </div>

          <div
            style={{
              width: "80%",
              backgroundColor: "#fff",
              padding: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
            }}
          >
            <h3>Your Stats</h3>
            <p>Here are your most recent statistics and data insights:</p>
            <ul>
              <li>Total Visits: 350</li>
              <li>Total Users: 1,250</li>
              <li>Active Sessions: 12</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
