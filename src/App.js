import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Data from "./FetchData";
import Header from "./components/Header/Header.component"

import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import text from "./images/text.png";

function App() {
  const [movieList, setMovieList] = useState(false);

  const [offset, setOffset] = useState();
  const handleScroll = () => setOffset(window.pageYOffset);
  window.addEventListener("scroll", handleScroll);

  return (
    <div className="App">
      <Data setMovieList={setMovieList} />
      <Router>
      <Header />
        <div className="zoom">
          <img
            src={img1}
            alt=""
            id="img1"
            style={{ width: 100 + offset * 0.3 + "%" }}
          />
          <img
            src={img2}
            alt=""
            id="img2"
            style={{ width: 100 + offset * 0.3 + "%" }}
          />
          <img
            src={text}
            alt=""
            id="text"
            style={{ top: `-${10 + offset * 0.3 + "%"}` }}
          />
        </div>
      </Router>
    </div>
  );
}

export default App;
