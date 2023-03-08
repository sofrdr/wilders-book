import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Wilder from "../components/Wilder/Wilder";
import { wildersData } from "../wildersData.js";

const Home = () => {
  const [wilders, setWilders] = useState([]);
  return (
    <div>
      <Header />
      <main className="container">
        <h2>Wilders</h2>
        <section className="card-row">
          {wildersData.map((wilder, i) => {
            const { name, skills } = wilder;
            return <Wilder key={i} name={name} skills={skills} />;
          })}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
