import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState(undefined);
  const [filters, setFilters] = useState(
    {
      filterByNumericValues: [],
    },
  );
  return (
    <PlanetsContext.Provider value={ { planets, setPlanets, filters, setFilters } }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default PlanetsProvider;
