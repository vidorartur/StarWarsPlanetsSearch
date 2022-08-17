import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/MyContext';

const Table = (props) => {
  const { planets } = useContext(MyContext);
  const { filter } = props;
  console.log(filter);
  return (
    <div>
      <table>
        <tbody>
          <tr>
            {typeof planets !== 'undefined' ? Object.keys(planets[0])
              .filter((element) => element !== 'residents')
              .map((item) => (<th key={ item }>{item}</th>)) : ''}
          </tr>

          { typeof planets !== 'undefined' ? planets
            .filter((element) => element.name.includes(filter))
            .map((item) => (
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

Table.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default Table;
