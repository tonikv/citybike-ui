/*
    Show single station data.
*/

import Table from 'react-bootstrap/Table';
import { IStationShow } from '../types';
import StationMap from './StationMap';
import LoadingData from './LoadingData';
import { useMemo } from 'react';

const centeredText = {
    textAlign: "center" as "center",
    lineHeight: 0.8
}

type ICoords = {
    lat: number;
    lng: number;
};

const center: ICoords = { lat:60.192059, lng: 24.945831};

// Show station data and map with marker on station position.
const StationItem: React.FC<IStationShow> = ({ station }) => {

    // Prevent map from rerendering when station data is not changed.
    const memoizedStation = useMemo(() => {
        // If station is null or undefined, show loading message and default map view centered in Helsinki.
        if (station === null || station === undefined) {
            return (
                <>
                    <LoadingData />
                    <StationMap stationPosition={center} />
                </>
            )
        }

        const stationCoords: ICoords = { lat: station.y, lng: station.x };
        const averageFrom = Math.floor(Number(station.Average_journey_distance_starting)) + " meters";
        const averageTo = Math.floor(Number(station.Average_journey_distance_ending)) + " meters";

        // Show station data and map with marker on station position.
        return (
            <>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Station Name</th>
                            <th>Address</th>
                            <th>Capacity</th>
                            <th>Journeys Start</th>
                            <th>End</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{station.Nimi}</td>
                            <td>{station.Osoite}</td>
                            <td>{station.Kapasiteetti}</td>
                            <th>{station.Starting_station_count}</th>
                            <th>{station.Ending_station_count}</th>
                        </tr>
                    </tbody>
                </Table>

                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Average distance traveled from this station</th>
                            <th>Average distance traveled to this station</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{averageFrom}</td>
                            <td>{averageTo}</td>
                        </tr>
                    </tbody>
                </Table>


                <p style={centeredText}>
                    latitude: {stationCoords.lat.toFixed(2)}, longitude: {stationCoords.lng.toFixed(2)}{' '}
                </p>
                <StationMap stationPosition={stationCoords} />

            </>
        )
    }, [station])
    return memoizedStation
}
export default StationItem
