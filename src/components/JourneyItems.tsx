/* 
  Handle viewing of journey data
  Change sorting options with buttons
*/

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import JourneyItem from './JourneyItem';
import { IJourneyItem, IJourneyList } from '../types';

const btnStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: 20
}

const headerStyle = {
  marginTop: "10px",
  fontSize: "24px"
}

const JourneyItems: React.FC<IJourneyList> = ({ journeyItems, pageOptions, sortOrder, changeSortingRow, changeSortingOrder }) => {
  if (journeyItems.length === 0) {
    return (
      <>
        <h1>Still waiting for data</h1>
      </>
    )
  }
  let documentNumber = pageOptions.page * pageOptions.limit;
  let sortOrderDisplay = sortOrder === "-1" ? "DESC" : "ASC"

  return (<>
    <h1 style={headerStyle}>JOURNEYS LIST</h1>
      <Table striped bordered hover size="sm" responsive="sm">
        <thead>
          <tr>
            <th><Button style={btnStyle} size="sm" variant="danger" onClick={changeSortingOrder}>{sortOrderDisplay}</Button></th>
            <th >Departure Station <Button style={btnStyle} size="sm" name="Departure_station_name"  onClick={changeSortingRow}>SORT</Button></th>
            <th >Return Station <Button style={btnStyle} size="sm"name="Return_station_name"  onClick={changeSortingRow}>SORT</Button></th>
            <th >Covered Distance km<Button style={btnStyle} size="sm" name="Covered_distance" onClick={changeSortingRow}>SORT</Button></th>
            <th >Duration minutes<Button style={btnStyle} size="sm" name="Duration" onClick={changeSortingRow}>SORT</Button></th>
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
                Covered_distance={Number((journey.Covered_distance / 1000).toFixed(2))} //Convert meters to kilometers
                Duration={Number((journey.Duration / 60).toFixed(2))} // Convert seconds to minutes
                />
              )
            })}
        </tbody>
    </Table>
    </>
  )
}

export default JourneyItems