import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import JourneyItem from './JourneyItem';
import { IJourneyItem, IJourneyList } from '../types';

const JourneyItems: React.FC<IJourneyList> = ({ journeyItems, pageOptions, sortOrder, changeSortingRow, changeSortingOrder}) => {
  let documentNumber = pageOptions.page * pageOptions.limit;
  let sortOrderDisplay = sortOrder === "-1" ? "DESC" : "ASC"

  return (<>
    <h1 className="header_selector">JOURNEYS LIST</h1>
      <Table striped bordered hover size="sm" responsive="sm">
        <thead>
          <tr>
            <th><Button className="bt-small" size="sm" variant="danger" onClick={changeSortingOrder}>{sortOrderDisplay}</Button></th>
            <th className="table_header">Departure Station <Button className="bt-small" size="sm" name="Departure_station_name"  onClick={changeSortingRow}>SORT</Button></th>
            <th className="table_header">Return Station <Button className="bt-small" size="sm"name="Return_station_name"  onClick={changeSortingRow}>SORT</Button></th>
            <th className="table_header">Covered Distance km<Button className="bt-small" size="sm" name="Covered_distance" onClick={changeSortingRow}>SORT</Button></th>
            <th className="table_header">Duration minutes<Button className="bt-small" size="sm" name="Duration" onClick={changeSortingRow}>SORT</Button></th>
          </tr>
        </thead>
        <tbody>
        {journeyItems.map((journey: IJourneyItem, index: number) => {
              return(
              <JourneyItem
                key={index}
                _id={journey._id}
                count={documentNumber++}
                Departure_station_name={journey.Departure_station_name}
                Return_station_name={journey.Return_station_name}
                Covered_distance={Number((journey.Covered_distance / 1000).toFixed(2))}
                Duration={Number((journey.Duration / 60).toFixed(2))}
                />
              )
            })}
        </tbody>
    </Table>
    </>
  )
}

export default JourneyItems