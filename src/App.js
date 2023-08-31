import React, { useState, useEffect } from "react";
import Homepage from "./components/Homepage";
import Easy from "./components/Easy";
import Medium from "./components/Medium";
import Hard from "./components/Hard";
import Verse from "./components/Verse";
import { Routes, Route } from "react-router-dom";

import { data } from "./data";

import "./App.css";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(data[0]);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/votd" element={<Verse />} />
        <Route path="/easy" element={<Easy easyQuestions={questions.easy} />} />
        <Route path="/medium" element={<Medium />} />
        <Route path="/hard" element={<Hard />} />
      </Routes>
    </div>
  );
}

export default App;
