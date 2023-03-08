import React, { useState } from "react";
import "./Form.css";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const url = "http://localhost:3001/api/wilder";
  const addWilder = async ({ name, email }) => {
    try {
      setErrorMsg("");
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });
      const data = await response.json();
      console.log(data);
      if (data.error) {
        setErrorMsg(data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addWilder({ name, email });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <div className="form-input">
          <label htmlFor="name">Name :</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-input">
          <label htmlFor="email">Email :</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <button type="submit">Submit</button>
      {errorMsg && <div>{errorMsg}</div>}
    </form>
  );
};

export default Form;
