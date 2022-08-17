import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState(undefined);
  return (
    <MyContext.Provider value={ { planets, setPlanets } }>
      { children }
    </MyContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default PlanetsProvider;
