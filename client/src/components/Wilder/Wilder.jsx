import ProfileImg from "../../assets/blank_profile.png";
import React from "react";
import PropTypes from "prop-types";
import Skill from "../Skill/Skill";
import "./Wilder.css";
import { ImBin2 } from "react-icons/im";

const Wilder = ({ name, skills, id, city, email }) => {
  const url = "http://localhost:3001/api/wilder";

  const removeWilder = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <article className="card">
      <img src={ProfileImg} alt={`${name} Profile`} />
      <h3>{name}</h3>
      <h4>{city}</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
        aspernatur veritatis ducimus neque, fuga explicabo, cum reprehenderit
        odit suscipit eveniet dolores. Odio deleniti eligendi quas praesentium
        sunt nihil possimus porro.
      </p>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {skills.map(({ name }, i) => {
          return <Skill key={i} name={name} v />;
        })}
      </ul>
      <h4>Contact</h4>
      <p>{email}</p>
      <button onClick={() => removeWilder(id)} className="delete-button">
        <ImBin2 />
      </button>
    </article>
  );
};

Wilder.propTypes = {
  name: PropTypes.string,
  skills: PropTypes.array,
  id: PropTypes.number,
};

export default Wilder;
