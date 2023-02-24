import React, { useState } from 'react';

//* Estilos
import '../styles/pages/Exercises.scss';

// * Componentes
import { Button } from 'react-bootstrap';
import { BsFillHouseDoorFill } from 'react-icons/bs';

import CardEjercicio from '../components/containers/Card.jsx';
import Contador from '../components/Contador';
import Api from '../components/Api';

// * Variables
import Data from '../_data/DataBase.json';

const Exercises = () => {
  const [ejercicio, setEjercicio] = useState(null);

  const Ejercicios = Data.map((item, index) => {
    const img = new URL(`../assets/exercises/${item.img}`, import.meta.url).pathname;

    return (
      <CardEjercicio
        key={index}
        id={index}
        img={img}
        title={item.title}
        description={item.description}
        setEjercicio={setEjercicio}
      />
    );
  });

  switch (ejercicio) {
    case 1:
      return (
        <article className='Contenedor__Ejercicios'>
          <Button className='btn__home' onClick={() => setEjercicio(null)}>
            <BsFillHouseDoorFill />
          </Button>
          <Contador />
        </article>
      );

    case 2:
      return (
        <article className='Contenedor__Ejercicios'>
          <Button className='btn__home' onClick={() => setEjercicio(null)}>
            <BsFillHouseDoorFill />
          </Button>
          <Api />
        </article>
      );

    default:
      return (
        <article className='Contenedor__Ejercicios'>
          <div className='Ejercicios'>{Ejercicios}</div>
        </article>
      );
  }
};

export default Exercises;
