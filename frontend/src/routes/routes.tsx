import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import CharacterDetails from '../pages/CharacterDetails';

const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/character/:characterFirstName" Component={CharacterDetails} />
      </Routes>
    </Router>

  );
};

export default RouterComponent;
