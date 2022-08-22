import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import PlanetsProvider from '../context/PlanetsProvider';
import MainPage from '../Pages/MainPage';

describe('Testando o funcionamento da aplicação', () => {
test('Testando se os elementos estão na tela', () => {
    renderWithRouter(<PlanetsProvider><App /></PlanetsProvider>)
    const title = screen.getByText('Star Wars')
    const nameFilter = screen.getByTestId('name-filter');
    const columnFilter = screen.getByTestId('column-filter');
    const comparisonFilter = screen.getByTestId('comparison-filter');
    const valueFilter = screen.getByTestId('value-filter');
    const buttonFilter = screen.getByTestId('button-filter');


    expect(title).toBeInTheDocument();
    expect(nameFilter).toBeInTheDocument();
    expect(columnFilter).toBeInTheDocument();
    expect(comparisonFilter).toBeInTheDocument();
    expect(valueFilter).toBeInTheDocument();
    expect(buttonFilter).toBeInTheDocument();
    userEvent.selectOptions(columnFilter, 'orbital_period')
})

test('Testando se os elementos estão na tela depois de filtrar com comparação de [igual a]', async () => {
    renderWithRouter(<PlanetsProvider><MainPage /></PlanetsProvider>)
    const columnFilter = screen.getByTestId('column-filter');
    const comparisonFilter = screen.getByTestId('comparison-filter');
    const buttonFilter = screen.getByTestId('button-filter');
    const valueFilter = screen.getByTestId('value-filter');

    userEvent.selectOptions(columnFilter, 'population')
    userEvent.selectOptions(comparisonFilter, 'igual a')
    userEvent.type(valueFilter, '2000000000')

    userEvent.click(buttonFilter)

    expect(await screen.findAllByRole('cell')).toHaveLength(13);

})

test('Testando se os elementos estão na tela depois de filtrar com comparação de [menor que]', async () => {
    renderWithRouter(<PlanetsProvider><MainPage /></PlanetsProvider>)
    const columnFilter = screen.getByTestId('column-filter');
    const comparisonFilter = screen.getByTestId('comparison-filter');
    const buttonFilter = screen.getByTestId('button-filter');
    const valueFilter = screen.getByTestId('value-filter');

    userEvent.selectOptions(columnFilter, 'population')
    userEvent.selectOptions(comparisonFilter, 'menor que')
    userEvent.type(valueFilter, '2000000000')
    userEvent.click(buttonFilter)
    expect(await screen.findAllByRole('cell')).toHaveLength(65);
})

test('Testando se os elementos estão na tela depois de filtrar com comparação de [maior que] ', async () => {
    renderWithRouter(<PlanetsProvider><MainPage /></PlanetsProvider>)
    const columnFilter = screen.getByTestId('column-filter');
    const comparisonFilter = screen.getByTestId('comparison-filter');
    const buttonFilter = screen.getByTestId('button-filter');
    const valueFilter = screen.getByTestId('value-filter');

    userEvent.selectOptions(columnFilter, 'population')
    userEvent.selectOptions(comparisonFilter, 'maior que')
    userEvent.type(valueFilter, '2000000000')

    userEvent.click(buttonFilter)

    expect(await screen.findAllByRole('cell')).toHaveLength(26);

})

test('Testando o Filtro de nome', async () => {
    renderWithRouter(<PlanetsProvider><MainPage /></PlanetsProvider>)
    const nameFilter = screen.getByTestId('name-filter');
    userEvent.type(nameFilter, 'Tatooine')
    expect(await screen.findAllByRole('cell')).toHaveLength(13);
})
});
