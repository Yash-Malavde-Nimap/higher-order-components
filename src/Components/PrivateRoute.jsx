/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

function PrivateRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;
