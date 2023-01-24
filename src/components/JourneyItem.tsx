/*
    Show individual Journey item. Data comes from JourneyItems component
*/

import { IJourneyItem } from '../types';

const JourneyItem: React.FC<IJourneyItem> = (props: IJourneyItem) => {
    return (
        <tr>
            <td>{props.count + 1}</td>
            <td>{props.Departure_station_name}</td>
            <td>{props.Return_station_name}</td>
            <td>{props.Covered_distance}</td>
            <td>{props.Duration}</td>
        </tr>
    )
}

export default JourneyItem
