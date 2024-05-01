import { useEffect } from "react";
import useNavigate from "@hooks/useNavigate";

function Logout() {
  const { navigate } = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      localStorage.removeItem("access_token");
      navigate("/login");
    };

    handleLogout();
  }, [navigate]);

  return null;
}

export default Logout;
