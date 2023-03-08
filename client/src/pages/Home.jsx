import { React, useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Wilder from "../components/Wilder/Wilder";
import { wildersData } from "../wildersData.js";

const Home = () => {
  const [wilders, setWilders] = useState([]);
  const [error, setError] = useState(false);
  const url = "http://localhost:3001/api/wilder";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setWilders(data);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Header />
      <main className="container">
        <h2>Wilders</h2>
        <section className="card-row">
          {wilders &&
            wilders.map((wilder, i) => {
              const { name, skills, id } = wilder;
              return <Wilder key={id} name={name} skills={skills} />;
            })}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
