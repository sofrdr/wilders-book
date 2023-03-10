import React, { useContext, useState } from "react";
import { AppContext } from "../../utils/context";

import "./Form.css";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const url = "http://localhost:3001/api/wilder";

  const { setIsLoading } = useContext(AppContext);

  const reinitializeData = () => {
    setEmail("");
    setName("");
  };

  const addWilder = async ({ name, email, city }) => {
    try {
      setIsLoading(true);
      setErrorMsg("");
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, city }),
      });
      const data = await response.json();
      if (data.error) {
        setErrorMsg(data.error);
      }
      reinitializeData();
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addWilder({ name, email, city });
  };
  return (
    <section className="form-container">
      <h2>Add a wilder</h2>
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

          <div className="form-input">
            <label htmlFor="city">City :</label>
            <input
              id="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>
        {errorMsg && <div className="error-msg">{errorMsg}</div>}
        <br />
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
