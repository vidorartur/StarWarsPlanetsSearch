import React, { useState, useEffect, useContext } from 'react';
import MyContext from '../context/MyContext';

const PlanetsRequest = () => {
  const { setPlanets } = useContext(MyContext);
  const [resultado, setResultado] = useState();
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
};

export default PlanetsRequest;
