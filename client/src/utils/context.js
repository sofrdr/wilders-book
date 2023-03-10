import { createContext, useState, useEffect } from "react";

const url = "http://localhost:3001/api/wilder";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [wilders, setWilders] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      setError(false);
      const response = await fetch(url);
      const data = await response.json();
      setWilders(data);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, [wilders]);

  return (
    <AppContext.Provider value={{ wilders, error, setError }}>
      {children}
    </AppContext.Provider>
  );
};
