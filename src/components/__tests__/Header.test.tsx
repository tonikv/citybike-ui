import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header component', () => {
    test('renders header with text and styles', () => {
        render(<Header />);
        const headerElement = screen.getByText(/CITYBIKE/i);
        const spanElement = screen.getByText(/Journeys And Stations/i);

        expect(headerElement).toBeInTheDocument();
        expect(headerElement).toHaveStyle('display: block');

        expect(spanElement).toBeInTheDocument();
    });
});
