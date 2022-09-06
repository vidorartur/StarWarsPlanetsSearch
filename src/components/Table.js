import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from '../context/PlanetsContext';
import '../App.css';

const Table = (props) => {
  const { planets, filters } = useContext(PlanetsContext);
  const selectedFilters = filters.filterByNumericValues;
  const filterLength = filters.filterByNumericValues.map((item) => item);
  const { filter } = props;
  const NUMBER_3 = 3;
  const NUMBER_4 = 4;
  return (
    <div className="table">
      <table>
        <tbody>
          <tr>
            {typeof planets !== 'undefined' ? Object.keys(planets[0])
              .filter((element) => element !== 'residents' && element !== 'films'
              && element !== 'created' && element !== 'edited' && element !== 'url')
              .map((item) => (
                <th key={ item } className="table-title">
                  {item
                    .toUpperCase()}
                </th>)) : ''}
          </tr>
          { typeof planets !== 'undefined' ? planets
            .filter((element) => element.name.toLowerCase()
              .includes(filter.toLowerCase()))
            .filter((item) => {
              if (selectedFilters.length > 0) {
                const { column, comparison, value } = filterLength[0];
                if (comparison === '>') {
                  return Math.round(item[column]) > Math.round([value]);
                } if (comparison === '<') {
                  return Math.round(item[column]) < Math.round([value]);
                }
                return Math.round(item[column]) === Math.round([value]);
              }
              return item;
            })
            .filter((item) => {
              if (selectedFilters.length > 1) {
                const { column, comparison, value } = filterLength[1];
                if (comparison === '>') {
                  return Math.round(item[column]) > Math.round([value]);
                } if (comparison === '<') {
                  return Math.round(item[column]) < Math.round([value]);
                }
                return Math.round(item[column]) === Math.round([value]);
              }
              return item;
            })
            .filter((item) => {
              if (selectedFilters.length > 2) {
                const { column, comparison, value } = filterLength[2];
                if (comparison === '>') {
                  return Math.round(item[column]) > Math.round([value]);
                } if (comparison === '<') {
                  return Math.round(item[column]) < Math.round([value]);
                }
                return Math.round(item[column]) === Math.round([value]);
              }
              return item;
            })
            .filter((item) => {
              if (selectedFilters.length > NUMBER_3) {
                const { column, comparison, value } = filterLength[3];
                if (comparison === '>') {
                  return Math.round(item[column]) > Math.round([value]);
                } if (comparison === '<') {
                  return Math.round(item[column]) < Math.round([value]);
                }
                return Math.round(item[column]) === Math.round([value]);
              }
              return item;
            })
            .filter((item) => {
              if (selectedFilters.length > NUMBER_4) {
                const { column, comparison, value } = filterLength[4];
                if (comparison === '>') {
                  return Math.round(item[column]) > Math.round([value]);
                } if (comparison === '<') {
                  return Math.round(item[column]) < Math.round([value]);
                }
                return Math.round(item[column]) === Math.round([value]);
              }
              return item;
            })
            .map((item) => (
              <tr key={ item.name }>
                <td className="table-name">{ item.name.toUpperCase() }</td>
                <td className="table-peroid">{ item.rotation_period.toUpperCase() }</td>
                <td className="table-orbital">{ item.orbital_period.toUpperCase() }</td>
                <td className="table-diameter">{ item.diameter.toUpperCase() }</td>
                <td className="table-climate">{ item.climate.toUpperCase() }</td>
                <td className="table-name">{ item.gravity.toUpperCase() }</td>
                <td className="table-peroid">{ item.terrain.toUpperCase() }</td>
                <td className="table-orbital">{ item.surface_water.toUpperCase() }</td>
                <td className="table-diameter">{ item.population.toUpperCase() }</td>
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
