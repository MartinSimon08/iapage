import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Construyamos tus trabajos con  GPT-3 OpenAI</h1>
      <p>GPT-3 OpenAI Es una herramienta para desarrollar respuestas a problemas dentro del mundo de la educacion y el desarrollo. Recomendada por empresas mundialmente reconocidas, hemos desarrollado mas de 10,000 soluciones</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Ingresar Direccion de Email" />
        <button type="button">Empezar</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>8,200 personas ingresaron hoy</p>
      </div>
    </div>
    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
