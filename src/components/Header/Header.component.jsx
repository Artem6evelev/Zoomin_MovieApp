import React from "react";
import { useHistory } from "react-router-dom";

import "./Header.styles.css";

export default function Header(props) {
  const { favoriteList } = props;
  let history = useHistory();

  const onClickLogo = () => {
    history.push("/");
  };

  const onClickFavorite = () => {
    history.push("/MyFavoriteList");
  };

  let counter = 0;
  const getNumberOfFavoriteMovies = () => {
    if (favoriteList) {
      Object.keys(favoriteList).forEach((key) => {
        if (favoriteList[key] == true) {
          counter++;
        }
      });
      return <span> ( {counter} )</span>;
    }
  };

  return (
    <div className="header">
      <img
        className="header__img"
        alt=""
        onClick={onClickLogo}
        src={process.env.PUBLIC_URL + `star-wars-logo.png`}
      ></img>
      <div className="header__favorite" onClick={onClickFavorite}>
        My Favorites Movies {getNumberOfFavoriteMovies()}
        <img
          alt=""
          className="header__img"
          src={process.env.PUBLIC_URL + `movie.png`}
        ></img>
      </div>
    </div>
  );
}
