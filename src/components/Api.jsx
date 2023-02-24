import React, { useState } from 'react';

import '../styles/components/api.scss';
import img from '../assets/exercises/card2.gif';

const Api = () => {
  const [image, setImage] = useState({ url: img });

  const cambiarImagen = async () => {
    try {
      const res = await fetch('https://random-d.uk/api/v2/random');
      setImage(await res.json());
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <article className='api'>
      <button onClick={cambiarImagen}>Mostrar imagen</button>
      <figure>
        <img src={image.url} alt='' />
      </figure>
    </article>
  );
};

export default Api;
