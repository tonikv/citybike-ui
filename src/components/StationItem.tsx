/*
    Show single station data.
*/

import Table from 'react-bootstrap/Table';
import { IStationShow } from '../types';

const StationItem: React.FC<IStationShow> = ( {singleStation} ) => {
    
    if (singleStation === null) {
        return <p style={{paddingTop: 4}}>Loading data</p>
    }

    return (
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
                    <td>{singleStation.Nimi}</td>
                    <td>{singleStation.Osoite}</td>
                    <td>{singleStation.Kapasiteetti}</td>
                    <th>{singleStation.Starting_station_count}</th>
                    <th>{singleStation.Ending_station_count}</th>
                    </tr>
            </tbody>
        </Table>
    )
}

export default StationItem