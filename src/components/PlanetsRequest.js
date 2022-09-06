import React, { useState, useEffect, useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function PlanetsRequest() {
  const [resultado, setResultado] = useState();
  const { setPlanets } = useContext(PlanetsContext);
  useEffect(() => {
    const func = async () => {
      const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const request = await fetch(endPoint);
      const requestJson = await request.json();
      const { results } = requestJson;
      setResultado(results);
    };
    func();
  }, []);
  setPlanets(resultado);
  return (<div />);
}

export default PlanetsRequest;
