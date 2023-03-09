import React, { useState, useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./AddSkillForm.css";

const AddSkillForm = ({ wilderId, toggleForm }) => {
  const [skillsList, setSkillsList] = useState([]);
  const [skill, setSkill] = useState("");

  const url = "http://localhost:3001/api/skill";

  // Fetch all skills from BDD
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

  // Function to create a new skill
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
      return newSkill.id;
    } catch (error) {
      console.log(error);
    }
  };

  // Function to add a skill to a wilder
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

  // Create an array with skills' name only
  const skillsName = skillsList.map((skill) => {
    return skill.name;
  });

  // On form submit
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      // Check if the skill already exists, if not we create it before adding it to the wilder
      if (!skillsName.includes(skill)) {
        const newSkillId = await createSkill(skill);
        await addSkillToWilder(newSkillId, wilderId);
      } else {
        const skilltoAdd = skillsList.find((item) => item.name === skill);
        const { id } = skilltoAdd;
        await addSkillToWilder(id, wilderId);
      }
      toggleForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="add-skill-form" onSubmit={handleSubmit}>
      <label htmlFor="skill">Skill</label>
      <div className="close-button" onClick={toggleForm}>
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
