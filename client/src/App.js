import "./App.css";

import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
