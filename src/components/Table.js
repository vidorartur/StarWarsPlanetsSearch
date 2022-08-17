import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

const Table = () => {
  const { planets } = useContext(MyContext);
  console.log(planets);

  return (
    <div>
      <table>
        <tbody>
          <tr>
            {typeof planets !== 'undefined' ? Object.keys(planets[0])
              .filter((element) => element !== 'residents')
              .map((item) => (<th key={ item }>{item}</th>)) : ''}
          </tr>

          { typeof planets !== 'undefined' ? planets.map((item) => (
            <tr key={ item.name }>
              <td>{ item.name }</td>
              <td>{ item.rotation_period }</td>
              <td>{ item.orbital_period }</td>
              <td>{ item.diameter }</td>
              <td>{ item.climate }</td>
              <td>{ item.gravity }</td>
              <td>{ item.terrain }</td>
              <td>{ item.surface_water }</td>
              <td>{ item.population }</td>
              <td>{ item.films }</td>
              <td>{ item.created }</td>
              <td>{ item.edited }</td>
              <td>{ item.url }</td>
            </tr>

          )) : ''}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
