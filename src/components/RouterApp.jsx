import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import APropos from './APropos';
import Competences from './Competences';

export default function RouterApp() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/apropos" element={<APropos />} />
          <Route path="/competences" element={<Competences />} />
        </Routes>
      </BrowserRouter>
    );
  }