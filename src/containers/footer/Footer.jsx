import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Se de los primeros en utilizar nuestra tecnologia</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Solicitar Acceso Anticipado</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>calle 123-8A, <br />Derechos reservados</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Reservar</p>
        <p>Redes Sociales</p>
        <p>Llamar</p>
        <p>Contacto</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Nuestra empresa</h4>
        <p>Terminos y condiciones</p>
        <p>Politica de privacidad</p>
        <p>Contacto</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Acercarse</h4>
        <p>calle 123-8A</p>
        <p>123-12345678</p>
        <p>info@gpt-3.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 GPT-3. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
