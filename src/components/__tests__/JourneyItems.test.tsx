import { render, screen, fireEvent } from '@testing-library/react';
import JourneyItems from '../JourneyItems';
import { testJourneys } from '../testdata';


describe('JourneyItems', () => {

    test('if there is no data -> renders correctly', () => {
        const pageOptions = {
            page: 1,
            limit: 10,
        };
        const sortOrder = 'asc';
        const sortBy = 'Covered_distance';
        const isLoading = true;
        const changeSortingRow = jest.fn();
        const changeSortingOrder = jest.fn();
        const changePagePrev = jest.fn();
        const changePageNext = jest.fn();

        render(
            <JourneyItems
                journeyItems={null}
                pageOptions={pageOptions}
                sortOrder={sortOrder}
                sortBy={sortBy}
                isLoading={isLoading}
                changeSortingRow={changeSortingRow}
                changeSortingOrder={changeSortingOrder}
                changePagePrev={changePagePrev}
                changePageNext={changePageNext}
            />
        );
        const loadingMessage = screen.getByText(/Loading.../i);
        expect(loadingMessage).toBeInTheDocument();
    });

    test('renders journey items with correct data', () => {
        const pageOptions = {
            page: 1,
            limit: 10,
        };
        const sortOrder = 'asc';
        const sortBy = 'Covered_distance';
        const isLoading = true;
        const changeSortingRow = jest.fn();
        const changeSortingOrder = jest.fn();
        const changePagePrev = jest.fn();
        const changePageNext = jest.fn();

        render(
            <JourneyItems
                journeyItems={testJourneys}
                pageOptions={pageOptions}
                sortOrder={sortOrder}
                sortBy={sortBy}
                isLoading={isLoading}
                changeSortingRow={changeSortingRow}
                changeSortingOrder={changeSortingOrder}
                changePagePrev={changePagePrev}
                changePageNext={changePageNext}
            />
        );

        const tableColumn = screen.getByText(/Departure Station/i);
        expect(tableColumn).toBeInTheDocument();
    });

    test('toggle button is working', () => {
        const pageOptions = {
            page: 1,
            limit: 10,
        };
        const sortOrder = 'asc';
        const sortBy = 'Covered_distance';
        const isLoading = true;
        const changeSortingRow = jest.fn();
        const changeSortingOrder = jest.fn();
        const changePagePrev = jest.fn();
        const changePageNext = jest.fn();

        render(
            <JourneyItems
                journeyItems={testJourneys}
                pageOptions={pageOptions}
                sortOrder={sortOrder}
                sortBy={sortBy}
                isLoading={isLoading}
                changeSortingRow={changeSortingRow}
                changeSortingOrder={changeSortingOrder}
                changePagePrev={changePagePrev}
                changePageNext={changePageNext}
            />
        );

        const buttonHide = screen.getByText(/Hide/i);
        fireEvent.click(buttonHide);
        const buttonShow = screen.getByText(/Show/i);
        expect(buttonShow).toBeInTheDocument();
    });
});
