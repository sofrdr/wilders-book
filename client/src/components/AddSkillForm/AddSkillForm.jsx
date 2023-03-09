import React, { useState, useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./AddSkillForm.css";

const AddSkillForm = ({ wilderId }) => {
  const [skillsList, setSkillsList] = useState([]);
  const [skill, setSkill] = useState("");

  const url = "http://localhost:3001/api/skill";

  useEffect(() => {
    const getAllSkills = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setSkillsList(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllSkills();
  }, [skillsList]);

  const createSkill = async (skill) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: skill }),
      });
      const data = await response.json();
      const { newSkill } = data;
      console.log(newSkill);
      return newSkill.id;
    } catch (error) {
      console.log(error);
    }
  };

  const addSkillToWilder = async (skillId, wilderId) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/wilder/${wilderId}/skill/${skillId}/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const skillsName = skillsList.map((skill) => {
    return skill.name;
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!skillsName.includes(skill)) {
        const newSkillId = await createSkill(skill);
        await addSkillToWilder(newSkillId, wilderId);
      } else {
        const skilltoAdd = skillsList.find((item) => item.name === skill);
        const { id } = skilltoAdd;
        await addSkillToWilder(id, wilderId);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="add-skill-form" onSubmit={handleSubmit}>
      <label htmlFor="skill">Skill</label>
      <div className="close-button">
        <AiOutlineCloseCircle />
      </div>
      <input
        type="text"
        id="skill"
        value={skill}
        onChange={(e) => {
          setSkill(e.target.value);
        }}
      />
      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
};

export default AddSkillForm;
