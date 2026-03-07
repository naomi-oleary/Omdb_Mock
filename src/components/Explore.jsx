import React from 'react';
import Logo from '../assets/Logo.jpg';

export default function Explore() {
  return (
    <>
        <div className="explore__container">
            <div className="explore__row">
                <h2 className="explore__title">
                    Explore <span className="gold">top-rated movies</span> and ace your movie night
                </h2>
                <div className="carousel__container">
                    <div className="carousel__items">
                        <div className="carousel__slide">
                            1
                        </div>
                        <div className="carousel__slide">
                            2
                        </div>
                        <div className="carousel__slide">
                            3
                        </div>
                        <div className="carousel__slide">
                            4
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
