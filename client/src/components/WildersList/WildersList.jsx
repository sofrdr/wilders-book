import React, { useContext } from "react";
import { AppContext } from "../../utils/context";
import Wilder from "../Wilder/Wilder";
import "./WildersList.css";

const WildersList = () => {
  const { wilders } = useContext(AppContext);
  return (
    <section>
      <h2>Wilders</h2>
      <div className="card-row">
        {wilders &&
          wilders.map((wilder) => {
            const { id } = wilder;
            return <Wilder key={id} {...wilder} />;
          })}
      </div>
    </section>
  );
};

export default WildersList;
