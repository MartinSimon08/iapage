import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Nuestras actualizaciones, <br /> compartidas para la comunidad.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 12, 2023" text="Si este es el futuro, que sigue despues?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Mar 30, 2021" text="Noticias sobre actualizaciones" />
        <Article imgUrl={blog03} date="Oct 19, 2022" text="¿Como es nuestro sistema de cifrado?" />
        <Article imgUrl={blog04} date="Mar 26, 2020" text="¿Como funciona nuestra IA?" />
        <Article imgUrl={blog05} date="Jan 05, 2024" text="Alertas de mantenimiento este semana" />
      </div>
    </div>
  </div>
);

export default Blog;
