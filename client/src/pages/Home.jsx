import React from "react";
import Header from "../components/Header/Header";
import Wilder from "../components/Wilder/Wilder";
import { wildersData } from "../wildersData.js";

const Home = () => {
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
    </div>
  );
};

export default Home;
