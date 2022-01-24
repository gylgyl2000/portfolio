import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Accueil from './Accueil/Accueil';
import APropos from './APropos/APropos';
import Competences from './Competences/Competences';
import Parcours from './Parcours/Parcours';
import Projets from './Projets/Projets';

export default function RouterApp() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Accueil />} />
          <Route path="/apropos" element={<APropos />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/parcours" element={<Parcours />} />
          <Route path="/projets" element={<Projets />} />
        </Routes>
      </BrowserRouter>
    );
  }