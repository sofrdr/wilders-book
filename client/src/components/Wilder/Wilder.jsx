import ProfileImg from "../../assets/blank_profile.png";
import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import Skill from "../Skill/Skill";
import "./Wilder.css";
import { ImBin2 } from "react-icons/im";
import AddSkillForm from "../AddSkillForm/AddSkillForm";
import { AppContext } from "../../utils/context";

const Wilder = ({ name, skills, id, city, email }) => {
  const url = "http://localhost:3001/api/wilder";

  const { setIsLoading } = useContext(AppContext);

  const [addSkillFormOpen, setAddSkillFormOpen] = useState(false);

  const toggleForm = () => {
    setAddSkillFormOpen(!addSkillFormOpen);
  };

  const removeWilder = async (id) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log(data);
      setIsLoading(false);
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
        {skills.map((skill, i) => {
          return <Skill key={i} name={skill.name} skillId={skill.id} id={id} />;
        })}
      </ul>
      {addSkillFormOpen ? (
        <AddSkillForm wilderId={id} toggleForm={toggleForm} />
      ) : (
        <button className="button" onClick={toggleForm}>
          Add a skill
        </button>
      )}

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
  email: PropTypes.string,
  city: PropTypes.string,
};

export default Wilder;
