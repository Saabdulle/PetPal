import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../context";

const PrivateRoute = ({ children }) => {
  const { username } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(!username);
  }, [username]);

  if (username) {
    return <>{children}</>;
  } else if (loading) {
    return <p>Loading...</p>;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;