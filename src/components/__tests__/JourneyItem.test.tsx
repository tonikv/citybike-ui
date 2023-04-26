import { render, screen } from '@testing-library/react';
import JourneyItem from '../JourneyItem';
const tbody = document.createElement('tbody');

describe('JourneyItem', () => {
    test('renders journey item with correct data', () => {
        const journey = {
            _id: "1",
            count: 0,
            Departure: Date.now(),
            Return: Date.now(),
            Departure_station_id: 1,
            Departure_station_name: "Station A",
            Return_station_id: "2",
            Return_station_name: "Station B",
            Covered_distance: 10,
            Duration: 30
        };

        render(<JourneyItem {...journey} />, { container: document.body.appendChild(tbody) });
        const countCell = screen.getByText('1');
        const departureCell = screen.getByText('Station A');
        const returnCell = screen.getByText('Station B');
        const distanceCell = screen.getByText(10);
        const durationCell = screen.getByText(30);
        expect(countCell).toBeInTheDocument();
        expect(departureCell).toBeInTheDocument();
        expect(returnCell).toBeInTheDocument();
        expect(distanceCell).toBeInTheDocument();
        expect(durationCell).toBeInTheDocument();
    });
});
