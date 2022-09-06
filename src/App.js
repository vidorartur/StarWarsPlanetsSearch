import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import PlanetsRequest from './components/PlanetsRequest';
import PlanetsProvider from './context/PlanetsProvider';
import MainPage from './Pages/MainPage';

function App() {
  return (
    <PlanetsProvider>
      <Route path="/" exact component={ MainPage } />
      <PlanetsRequest />
    </PlanetsProvider>
  );
}

export default App;
