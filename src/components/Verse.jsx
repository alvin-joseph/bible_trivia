import React, { useState, useEffect } from "react";
import axios from "axios";
import { Puff } from "react-loader-spinner";

import { Link } from "react-router-dom";

const Verse = () => {
  const [verse, setVerse] = useState([]);

  const getVerse = () => {
    axios
      .get("https://labs.bible.org/api/?passage=votd&type=json")
      .then((res) => {
        setVerse(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getVerse();
  }, []);

  return (
    <div className="home container-sm h-75 p-5">
      {verse.length !== 0 ? (
        <div>
          <p className="h1">Verse of the Day</p>
          <div className="btn-container p-5">
            <p className="verse-chapter p-5">{`${verse.bookname} ${verse.chapter}:${verse.verse}`}</p>
            <p className="verse-text">{verse.text}</p>
            <Link to="/">
              <button className="back-btn btn btn-primary p-2 w-100">
                Go Back
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="spinner">
          <Puff color="#204963" height="60" width="60" />
          <p className="mt-3">Loading Verse...</p>
        </div>
      )}
    </div>
  );
};

export default Verse;
