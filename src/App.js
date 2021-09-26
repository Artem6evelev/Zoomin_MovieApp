import React, { useState, useEffect } from "react";
import "./App.css";
import Data from "./FetchData";
import Loader from "./Components/Loader/Loader";
import MovieBox from "./Components/MovieBox/MovieBox";
import Header from "./Components/Header/Header";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import MyFavoriteList from "./Components/MyFavoriteList/MyFavoriteList";
import { BrowserRouter as Router, Route } from "react-router-dom";

import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import text from "./images/text.png";

function App() {
  const [offset, setOffset] = useState()
  const [movieList, setMovieList] = useState(false);
  const [favoriteList, setFavoriteList] = useState(false);

  const handleScroll = () => setOffset(window.pageYOffset)

  window.addEventListener('scroll', handleScroll)

  useEffect(() => {
    let myFavoriteMovies = {};
    if (!localStorage.getItem("favorites")) {
      localStorage.setItem("favorites", JSON.stringify(myFavoriteMovies));
    } else {
      setFavoriteList(JSON.parse(localStorage.getItem("favorites")));
    }
  }, []);

  return (
    <div className="App">
      <Data setMovieList={setMovieList} />
      <Router>
        <Header favoriteList={favoriteList} />
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
        <Route exact path="/">
          {movieList ? (
            <MovieBox movieList={movieList} setFavoriteList={setFavoriteList} />
          ) : (
            <Loader />
          )}
        </Route>
        <Route path="/:id">
          <MovieDetails movieList={movieList}></MovieDetails>
        </Route>
        <Route exact path="/MyFavoriteList">
          <MyFavoriteList
            movieList={movieList}
            favoriteList={favoriteList}
            setFavoriteList={setFavoriteList}
          ></MyFavoriteList>
        </Route>
      </Router>
    </div>
  );
}

export default App;


