/*
    Show single station data.
*/

import Table from "react-bootstrap/Table";
import { IStationShow } from "../types";

type ICoords = {
  lat: number;
  lng: number;
};

const StationItem: React.FC<IStationShow> = ({ station }) => {
  const stationCoords: ICoords = { lat: station.y, lng: station.x };
  const averageFrom =
    Math.floor(Number(station.Average_journey_distance_starting)) + " meters";
  const averageTo =
    Math.floor(Number(station.Average_journey_distance_ending)) + " meters";

  return (
    <div role="article">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th style={{ width: "15%" }} className="table-header-fixed-height">
              Station Name
            </th>
            <th style={{ width: "25%" }} className="table-header-fixed-height">
              Address
            </th>
            <th style={{ width: "5%" }} className="table-header-fixed-height">
              Capacity
            </th>
            <th style={{ width: "10%" }} className="table-header-fixed-height">
              Journeys Start
            </th>
            <th style={{ width: "10%" }} className="table-header-fixed-height">
              End
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="table-cell-fixed-height">{station.Nimi}</td>
            <td className="table-cell-fixed-height">{station.Osoite}</td>
            <td className="table-cell-fixed-height">{station.Kapasiteetti}</td>
            <th className="table-cell-fixed-height">
              {station.Starting_station_count}
            </th>
            <th className="table-cell-fixed-height">
              {station.Ending_station_count}
            </th>
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

      <p className="centered-text">
        latitude: {stationCoords.lat.toFixed(4)}, longitude:{" "}
        {stationCoords.lng.toFixed(4)}{" "}
      </p>
    </div>
  );
};
export default StationItem;
