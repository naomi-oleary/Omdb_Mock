import React from 'react';
import MovieImg from '../assets/landing-img.svg';

const Landing = () => {
  return (
    <>
      <div className="landing__container container">
        <div className="landing__row">
          <h1 className="gold">RIMBERIO</h1>
          <h2>Browse Your Favorite Films</h2>
          <input type="text" className="search-bar" />
          <div className="landing__img--container">
            <img src={ MovieImg } className="landing--img" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing;