import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const NavigationContext = createContext({ page: "/", navigate: () => {} });

const NavigationProvider = ({ children }) => {
  const path = window.location.hash.substring(1);

  const [page, setPage] = useState(path || "/");

  useEffect(() => {
    if (path) {
      setPage(path);
    }
  }, [path]);

  const navigate = (url) => {
    setPage(url);
  };

  return (
    <NavigationContext.Provider value={{ page, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

// Agrega PropTypes para children
NavigationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useNavigate = () => {
  return useContext(NavigationContext);
};

export default useNavigate;
export { NavigationProvider };
