import React, { useContext, useState } from 'react';
import PlanetsRequest from '../components/PlanetsRequest';
import Table from '../components/Table';
import PlanetsContext from '../context/PlanetsContext';

function MainPage() {
  const { setFilters, filters } = useContext(PlanetsContext);
  const [filter, setFilter] = useState('');
  const [column, setcolumn] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  const [SelectColumnFilter, setSelectColumnFilter] = useState('population');
  const [SelectComparisonFilter, setSelectComparisonFilter] = useState('>');
  const [SelectNumberFilter, setSelectNumberFilter] = useState(0);

  // setcolumn();

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
    setFilters({ filterByNumericValues: [
      ...filters.filterByNumericValues,
      {
        column: SelectColumnFilter,
        comparison: SelectComparisonFilter,
        value: SelectNumberFilter,
      },
    ],
    });
    setcolumn(column.filter((item) => item !== SelectColumnFilter));
    if (SelectColumnFilter === 'population') {
      setSelectColumnFilter('orbital_period');
    }
    if (SelectColumnFilter !== 'population') {
      setSelectColumnFilter(column[0]);
    }
  };

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
      >
        { column.map((element) => (<option key={ element }>{element}</option>))}
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
