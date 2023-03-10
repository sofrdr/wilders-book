import { React, useContext } from "react";
import Error from "../components/Error";
import Form from "../components/Form/Form";
import WildersList from "../components/WildersList/WildersList";
import { AppContext } from "../utils/context";

const Home = () => {
  const { error } = useContext(AppContext);

  if (error) {
    return <Error />;
  }

  return (
    <main className="container">
      <WildersList />
      <Form />
    </main>
  );
};

export default Home;
