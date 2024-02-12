import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Mayor velocidad de respuesta',
    text: 'Servicio ultrarapido, obten resultados de calidad en microsegundos',
  },
  {
    title: 'Acceso a miles de plataformas de informacion',
    text: 'Contamos con +400,000 plataformas llenas de informacion precisa sobre lo que necesites',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">El Futuro es Ahora.</h1>
      <p>Solicite acceso anticipado para comenzar</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
