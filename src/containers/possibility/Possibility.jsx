import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Explora tu imaginacion</h4>
      <h1 className="gradient__text">Las posibilidades<br /> son infinitas</h1>
      <p>Siempre estaras conectado a nuestra inteligencia para poder resolver tus trabajos</p>
      <h4>Solicitar acceso anticipado</h4>
    </div>
  </div>
);

export default Possibility;
