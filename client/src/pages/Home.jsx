import { React, useEffect, useState } from "react";
import Error from "../components/Error";
import Form from "../components/Form/Form";
import WildersList from "../components/WildersList/WildersList";

const Home = () => {
  const [wilders, setWilders] = useState([]);
  const [error, setError] = useState(false);
  const url = "http://localhost:3001/api/wilder";

  useEffect(() => {
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
    fetchData();
  }, [wilders]);

  if (error) {
    return <Error />;
  }

  return (
    <main className="container">
      <WildersList wilders={wilders} />
      <Form />
    </main>
  );
};

export default Home;
