/*
    Show individual Journey item.
*/

import { IJourneyItem } from '../types';

const JourneyItem: React.FC<IJourneyItem> = (props: IJourneyItem) => {
    return (
        <tr>
            <td className="table-cell-fixed-height">{props.count + 1}</td>
            <td className="table-cell-fixed-height">{props.Departure_station_name}</td>
            <td className="table-cell-fixed-height">{props.Return_station_name}</td>
            <td className="table-cell-fixed-height">{props.Covered_distance}</td>
            <td className="table-cell-fixed-height">{props.Duration}</td>
        </tr>
    )
}

export default JourneyItem
