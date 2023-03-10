import { createContext, useState, useEffect } from "react";

const url = "http://localhost:3001/api/wilder";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [wilders, setWilders] = useState([]);
  const [skillsList, setSkillsList] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

  const fetchSkills = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/skill");
      const data = await response.json();
      setSkillsList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchSkills();
  }, [isLoading]);

  return (
    <AppContext.Provider
      value={{ wilders, error, setError, isLoading, setIsLoading, skillsList }}
    >
      {children}
    </AppContext.Provider>
  );
};
