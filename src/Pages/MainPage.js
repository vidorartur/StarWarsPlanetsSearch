import React, { useState } from 'react';
import PlanetsRequest from '../components/PlanetsRequest';
import Table from '../components/Table';

function MainPage() {
  const [filter, setFilter] = useState('');

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <span>
      <h1>Star Wars</h1>
      <input
        type="text"
        data-testid="name-filter"
        value={ filter }
        onChange={ handleChange }
      />
      <Table filter={ filter } />
      <PlanetsRequest />
    </span>
  );
}

export default MainPage;
