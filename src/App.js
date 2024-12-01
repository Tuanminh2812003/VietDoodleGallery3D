import './App.css';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './layout/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
