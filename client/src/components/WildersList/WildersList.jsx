import React from "react";
import Wilder from "../Wilder/Wilder";
import "./WildersList.css";

const WildersList = ({ wilders }) => {
  return (
    <section>
      <h2>Wilders</h2>
      <div className="card-row">
        {wilders &&
          wilders.map((wilder, i) => {
            const { name, skills, id } = wilder;
            return <Wilder key={id} id={id} name={name} skills={skills} />;
          })}
      </div>
    </section>
  );
};

export default WildersList;
