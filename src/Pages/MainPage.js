import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlanetsRequest from '../components/PlanetsRequest';
import Table from '../components/Table';
import PlanetsContext from '../context/PlanetsContext';
import '../App.css';

function MainPage() {
  const { setFilters, filters } = useContext(PlanetsContext);
  const [filter, setFilter] = useState('');
  const [column, setcolumn] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  const [selectColumnFilter, setSelectColumnFilter] = useState('population');
  const [selectComparisonFilter, setSelectComparisonFilter] = useState('>');
  const [selectNumberFilter, setSelectNumberFilter] = useState(0);

  const handleChangeFilterSearch = (e) => {
    setFilter(e.target.value);
  };

  const handleSelectColumnFilter = (e) => {
    setSelectColumnFilter(e.target.value);
    console.log(e.target.value);
  };

  const handleSelectComparisonFilter = (e) => {
    console.log(e.target.value);
    if (e.target.value === 'EQUAL TO') {
      setSelectComparisonFilter('===');
    } else if (e.target.value === 'LESS THAN') {
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
        column: selectColumnFilter,
        comparison: selectComparisonFilter,
        value: selectNumberFilter,
      },
    ],
    });
    setcolumn(column.filter((item) => item !== selectColumnFilter));
    if (selectColumnFilter === 'population') {
      setSelectColumnFilter('orbital_period');
    }
    if (selectColumnFilter !== 'population') {
      setSelectColumnFilter(column[0]);
    }
  };

  return (
    <main className="main">
      <div className="title">
        <h1 className="title">Star Wars</h1>
        <h2 className="title2">Planets</h2>
      </div>
      <Form.Label htmlFor="inputPassword5" />
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder="Filter Name"
        onChange={ handleChangeFilterSearch }
      />
      <Form.Select
        aria-label="Default select example"
        onChange={ handleSelectColumnFilter }
      >
        {column.length > 0 ? column.map((element) => (
          <option key={ element }>{element.toUpperCase()}</option>
        )) : <option>EMPTY</option> }
      </Form.Select>
      <Form.Select
        aria-label="Default select example"
        onChange={ handleSelectComparisonFilter }
      >
        <option>BIGGER THEN</option>
        <option>LESS THAN</option>
        <option>EQUAL TO</option>

      </Form.Select>
      <Form.Label htmlFor="inputPassword5" />
      <Form.Control
        type="number"
        data-testid="value-filter"
        id="inputPassword5"
        min="0"
        aria-describedby="passwordHelpBlock"
        placeholder="Filter Name"
        onChange={ handleSelectNumberFilter }
        value={ selectNumberFilter }
      />
      <Button
        className="filter-button"
        variant="dark"
        onClick={ setFilterss }
      >
        Filter
      </Button>
      <Table filter={ filter } />
    </main>
  );
}

export default MainPage;
