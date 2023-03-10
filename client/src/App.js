import "./App.css";

import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import { AppProvider } from "./utils/context";

const App = () => {
  return (
    <Router>
      <AppProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </AppProvider>
    </Router>
  );
};

export default App;
