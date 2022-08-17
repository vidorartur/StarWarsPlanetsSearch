import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import MainPage from './Pages/MainPage';

function App() {
  return (
    <PlanetsProvider>
      <Route path="/" exact component={ MainPage } />
    </PlanetsProvider>
  );
}

export default App;
