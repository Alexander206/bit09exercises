import React, { useState, useEffect } from 'react';

// * Estilos
import '../styles/components/Contador.scss';

// * Componentes
import { Button } from 'react-bootstrap';
import { BsFillCaretUpFill } from 'react-icons/bs';
import { BsArrowClockwise } from 'react-icons/bs';
import { BsFillCaretDownFill } from 'react-icons/bs';

const Contador = () => {
  const [number, setNumber] = useState(0);
  const [color, setcolor] = useState();

  useEffect(() => {
    number > 0 ? setcolor('green') : false;
    number < 0 ? setcolor('orange') : false;
    number === 0 ? setcolor('grey') : false;
  }, [number]);

  return (
    <article className='Contador'>
      <h1>Contador</h1>

      <span style={{ backgroundColor: `${color}` }}>{number}</span>

      <div>
        <Button onClick={() => setNumber(number - 1)}>
          <BsFillCaretDownFill />
        </Button>

        <Button onClick={() => setNumber(0)}>
          <BsArrowClockwise />
        </Button>

        <Button onClick={() => setNumber(number + 1)}>
          <BsFillCaretUpFill />
        </Button>
      </div>
    </article>
  );
};

export default Contador;
