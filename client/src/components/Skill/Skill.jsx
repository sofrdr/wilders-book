import React, { useContext, useState } from "react";
import "./Skill.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AppContext } from "../../utils/context";

const Skill = ({ name, skillId, id }) => {
  const [isOver, setIsOver] = useState(false);
  const { setIsLoading } = useContext(AppContext);

  const removeSkill = async (id, skillId) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `http://localhost:3001/api/wilder/${id}/skill/${skillId}/delete`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  return (
    <li
      onMouseEnter={() => setIsOver(true)}
      onMouseLeave={() => setIsOver(false)}
    >
      {name}
      <div
        className={isOver ? "delete-btn" : "hide"}
        onClick={() => removeSkill(id, skillId)}
      >
        <AiOutlineCloseCircle />
      </div>
    </li>
  );
};

export default Skill;
