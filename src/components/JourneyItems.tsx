/*
  Handle viewing of journey data
  Change sorting options with buttons
*/

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import JourneyItem from './JourneyItem';
import { IJourneyItem, IJourneyList } from '../types';
import { useState } from 'react';
import '../App.css';
import PageChanger from './PageChanger';
import InfoAboutSort from './InfoAboutSort';
import LoadingData from './LoadingData';

const btnStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: 18,
}

const headerStyle = {
  paddingTop: "25px",
  fontSize: "28px",
  textAlign: "center" as "center",
}

const spanStyle = {
  fontFamily: "Consolas, monospace",
  marginLeft: "30px",
}

const JourneyItems: React.FC<IJourneyList> = ({ journeyItems, pageOptions, sortOrder, sortBy, isLoading, changeSortingRow, changeSortingOrder, changePagePrev, changePageNext }) => {
  const [displayJourneys, setDisplayJourneys] = useState(true);

  const displayJourneysList = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setDisplayJourneys(!displayJourneys);
  }

  // If no data is loaded, show loading spinner
  if (journeyItems === null || journeyItems === undefined || journeyItems.length === 0) {
    return (
      <div style={headerStyle}>
        <LoadingData />
      </div>
    )
  }

  // If data is loaded, but not displayed, show button to display data
  if (!displayJourneys) {
    return (
      <>
        <h1 style={headerStyle}> JOURNEYS LIST
          <span style={spanStyle}>
            <Button size="sm" onClick={displayJourneysList}>Show</Button>
          </span>
        </h1>
      </>
    )
  }

  let documentNumber = pageOptions.page * pageOptions.limit;
  const sortOrderDisplay = sortOrder === "asc" ? "ASC" : "DESC"

  return (<>
    <h1 style={headerStyle}>JOURNEYS LIST
      <span style={spanStyle}>
      <Button size="sm"  onClick={displayJourneysList}>Hide</Button>
      </span>
    </h1>
      <Table striped bordered hover size="sm" className="tableWidth">
        <thead>
          <tr>
            <th><Button disabled={isLoading} style={btnStyle} size="sm" variant="danger" onClick={changeSortingOrder}>{sortOrderDisplay}</Button></th>
          <th >Departure Station <Button disabled={isLoading} style={btnStyle} size="sm" name="Departure_station_name" onClick={changeSortingRow}>SORT</Button></th>
            <th >Return Station <Button disabled={isLoading} style={btnStyle} size="sm"name="Return_station_name"  onClick={changeSortingRow}>SORT</Button></th>
            <th >Covered Dist km <Button disabled={isLoading} style={btnStyle} size="sm" name="Covered_distance" onClick={changeSortingRow}>SORT</Button></th>
            <th >Duration min <Button disabled={isLoading} style={btnStyle} size="sm" name="Duration" onClick={changeSortingRow}>SORT</Button></th>
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
      <InfoAboutSort
          sortBy={sortBy}
          sortOrder={sortOrder}
      />
      <PageChanger
          isLoading={isLoading}
          changePagePrev={changePagePrev}
          changePageNext={changePageNext}
      />
    </>
  )
}

export default JourneyItems
