import React from 'react';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Exercises from '../pages/Exercises';
import Home from '../pages/Home';

const Main = () => {
  return (
    <BrowserRouter>
      <nav className='Header'>
        <Link to='/'>Home</Link>
        <Link to='/exercises'>Ejercicios</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercises' element={<Exercises />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
