import ProfileImg from "../../assets/blank_profile.png";
import React from "react";
import Skill from "../Skill";

const Wilder = ({ name, skills }) => {
  return (
    <article className="card">
      <img src={ProfileImg} alt={`${name} Profile`} />
      <h3>{name}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
        aspernatur veritatis ducimus neque, fuga explicabo, cum reprehenderit
        odit suscipit eveniet dolores. Odio deleniti eligendi quas praesentium
        sunt nihil possimus porro.
      </p>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {skills.map((skill, i) => {
          const { title, votes } = skill;
          return <Skill key={i} title={title} votes={votes} />;
        })}
      </ul>
    </article>
  );
};

export default Wilder;
