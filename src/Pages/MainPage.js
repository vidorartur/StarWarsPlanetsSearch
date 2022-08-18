import React, { useContext, useState, useEffect } from 'react';
import PlanetsRequest from '../components/PlanetsRequest';
import Table from '../components/Table';
import PlanetsContext from '../context/PlanetsContext';

function MainPage() {
  const { setFilters } = useContext(PlanetsContext);
  const [filter, setFilter] = useState('');
  const [SelectColumnFilter, setSelectColumnFilter] = useState('population');
  const [SelectComparisonFilter, setSelectComparisonFilter] = useState('>');
  const [SelectNumberFilter, setSelectNumberFilter] = useState(0);

  const handleChangeFilterSearch = (e) => {
    setFilter(e.target.value);
  };

  const handleSelectColumnFilter = (e) => {
    setSelectColumnFilter(e.target.value);
  };

  const handleSelectComparisonFilter = (e) => {
    if (e.target.value === 'igual a') {
      setSelectComparisonFilter('===');
    } else if (e.target.value === 'menor que') {
      setSelectComparisonFilter('<');
    } else {
      setSelectComparisonFilter('>');
    }
  };

  const handleSelectNumberFilter = (e) => {
    setSelectNumberFilter(e.target.value);
  };

  const setFilterss = () => {
    setFilters({
      filterByNumericValues: [
        {
          column: SelectColumnFilter,
          comparison: SelectComparisonFilter,
          value: SelectNumberFilter,
        },
      ],
    });
  };

  useEffect(() => setFilterss(), []);

  return (
    <span>
      <h1>Star Wars</h1>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleChangeFilterSearch }
      />
      <br />
      <select
        data-testid="column-filter"
        onChange={ handleSelectColumnFilter }
        value={ SelectColumnFilter }
      >
        <option>
          population
        </option>
        <option>
          orbital_period
        </option>
        <option>
          diameter
        </option>
        <option>
          rotation_period
        </option>
        <option>
          surface_water
        </option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ handleSelectComparisonFilter }
      >
        <option>
          maior que
        </option>
        <option>
          menor que
        </option>
        <option>
          igual a
        </option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ handleSelectNumberFilter }
        value={ SelectNumberFilter }
        min="0"
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ setFilterss }
      >
        FILTRAR

      </button>

      <Table filter={ filter } />
      <PlanetsRequest />
    </span>
  );
}

export default MainPage;
