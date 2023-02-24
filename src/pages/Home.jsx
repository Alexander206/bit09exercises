import React from 'react';

// * Estilos

import '../styles/pages/Home.scss'

// * Variables
import img from '../assets/profile.png';

const Home = () => {
  return (
    <article className='containerHome'>
      <h1>Jeisson Gavilán</h1>
      <figure>
        <img src={img} alt='foto de jeisson alexander bien elegante y dueño del mundo jaja' />
        <figcaption>Foto de Jeisson Alexander</figcaption>
      </figure>
    </article>
  );
};

export default Home;
