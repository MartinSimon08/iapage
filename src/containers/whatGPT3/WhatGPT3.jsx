import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="¿Que es GPT-3?" text="Tenemos al agrado de presentar nuestra Inteligencia Artificial revolucionaria con una velocidad alta de respuesta y una exactitud en soluciones a problemas de la informatica." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Lo que puedas preguntarte en tu imaginacion.</h1>
      <p>Explorar nuestra Libreria</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Entrenamiento" text="Nuestra IA es entrenada constantemente por los mejores ingenieros de Inteligencia Artificial del Mundo." />
      <Feature title="Bases de conocimientos" text="Nuestras bases de conocimiento estan conectadas a mas de 10.000 Centros de informacion precisa alrededor del mundo" />
      <Feature title="Educacion" text="Nuestros trabajadores reciben constantes capacitaciones en nuestra empresa, para poder mejorar nuestra IA todos los meses con frecuentes actualizaciones." />
    </div>
  </div>
);

export default WhatGPT3;
