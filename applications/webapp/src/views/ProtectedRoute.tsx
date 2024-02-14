import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({
  children,
  isAuthenticated,
  setIsAuthenticated,
}: any) {
  const navigate = useNavigate();

  useEffect(() => {
    const authDataString = localStorage.getItem("authData");
    const currentTime = new Date().getTime();

    if (authDataString) {
      const authData = JSON.parse(authDataString);

      if (authData.expirationTime < currentTime) {
        localStorage.removeItem("authData");
        setIsAuthenticated(() => false); // Set isAuthenticated to false
        navigate("/login", { replace: true });
      } else {
        setIsAuthenticated(() => true);
      }
    } else {
      setIsAuthenticated(() => false); // Set isAuthenticated to false
      navigate("/login", { replace: true });
    }
  }, [navigate, setIsAuthenticated]);

  return isAuthenticated ? <>{children}</> : null;
}

export default ProtectedRoute;
