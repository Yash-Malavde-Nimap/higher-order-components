/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function withAuth(Component) {
  return function AuthHOC({ ...props }) {
    const navigate = useNavigate();
    const { isAuthenticated } = useContext(UserContext);

    useEffect(() => {
      if (!isAuthenticated) {
        navigate("/login");
      }
    }, []);

    return <Component {...props} />;
  };
}

export default withAuth;
