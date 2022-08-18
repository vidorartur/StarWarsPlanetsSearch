import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from '../context/PlanetsContext';
import '../App.css';

const Table = (props) => {
  const { planets, filters } = useContext(PlanetsContext);
  const selectedFilters = filters.filterByNumericValues[0];
  const { column, comparison, value } = selectedFilters;
  console.log(value);
  const { filter } = props;
  return (
    <div>
      <table className="table">
        <tbody className="table">
          <tr className="table">
            {typeof planets !== 'undefined' ? Object.keys(planets[0])
              .filter((element) => element !== 'residents')
              .map((item) => (<th key={ item } className="table">{item}</th>)) : ''}
          </tr>

          { typeof planets !== 'undefined' ? planets
            .filter((element) => element.name.toLowerCase()
              .includes(filter.toLowerCase()))
            .filter((item) => {
              if (item.population !== 'unknown') {
                if (comparison === '>') {
                  return Math.round(item[column]) > Math.round([value]);
                } if (comparison === '<') {
                  return Math.round(item[column]) <= Math.round([value]);
                }
                return Math.round(item[column]) === Math.round([value]);
              }
              return '';
            })
            .map((item) => (
              <tr key={ item.name }>
                <td className="table">{ item.name }</td>
                <td className="table">{ item.rotation_period }</td>
                <td className="table">{ item.orbital_period }</td>
                <td className="table">{ item.diameter }</td>
                <td className="table">{ item.climate }</td>
                <td className="table">{ item.gravity }</td>
                <td className="table">{ item.terrain }</td>
                <td className="table">{ item.surface_water }</td>
                <td className="table">{ item.population }</td>
                <td className="table">{ item.films }</td>
                <td className="table">{ item.created }</td>
                <td className="table">{ item.edited }</td>
                <td className="table">{ item.url }</td>
              </tr>
            )) : (<div>Carregando...</div>)}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default Table;
