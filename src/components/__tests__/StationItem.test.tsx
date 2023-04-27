import React from 'react';
import { render, screen } from '@testing-library/react';
import StationItem from '../StationItem';
import { testStations } from '../testdata';

describe('StationItem component', () => {
  test('renders station data', () => {
    const station = testStations[0];
    render(<StationItem station={station} />);

    // Check if the station data is displayed in the table
    const stationName = screen.getByText(station.Nimi);
    const stationAddress = screen.getByText(station.Osoite);
    const stationCapacity = screen.getByText(`${station.Kapasiteetti}`);
    const startingStationCount = screen.getByText(`${station.Starting_station_count}`);
    const endingStationCount = screen.getByText(`${station.Ending_station_count}`);

    expect(stationName).toBeInTheDocument();
    expect(stationAddress).toBeInTheDocument();
    expect(stationCapacity).toBeInTheDocument();
    expect(startingStationCount).toBeInTheDocument();
    expect(endingStationCount).toBeInTheDocument();

    // Check if the average distance traveled to and from the station is displayed
    const averageFrom = screen.getByText(/average distance traveled from this station/i);
    const averageTo = screen.getByText(/average distance traveled to this station/i);

    expect(averageFrom).toBeInTheDocument();
    expect(averageTo).toBeInTheDocument();

    // Check if the station's latitude and longitude are displayed
    const latilongitudeText = screen.getByText(`latitude: ${station.y.toFixed(4)}, longitude: ${station.x.toFixed(4)}`);

    expect(latilongitudeText).toBeInTheDocument();
  });
});
