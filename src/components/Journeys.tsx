import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import JourneyItem from "./JourneyItem";
import {
  IJourneyItem,
  sortByType,
  sortOrderType,
  IPageoptions,
} from "../types";
import { useState, useEffect } from "react";
import PageChanger from "./JourneysPageChanger";
import InfoAboutSort from "./JourneysInfoAboutSort";
import LoadSpinner from "./LoadSpinner";
import "../styles/Journeys.css";

const Journeys = () => {
  const defaultPageOption: IPageoptions = { page: 0, limit: 10 };
  const [displayJourneys, setDisplayJourneys] = useState(true);
  const [journeys, setJourneys] = useState<IJourneyItem[] | null>(null);
  const [sortBy, setSortBy] = useState<sortByType>("Duration");
  const [sortOrder, setSortOrder] = useState<sortOrderType>("asc");
  const [pageOptions, setPageOptions] =
    useState<IPageoptions>(defaultPageOption);
  const [isLoading, setLoading] = useState<boolean>(false);
  const JOURNEYS_URL =
    "https://citybike-typescript.onrender.com/journeys/sorted";

  // URI to access server for data.
  let journeysURI = `${JOURNEYS_URL}/${pageOptions.page}/${pageOptions.limit}/${sortBy}/${sortOrder}/`;

  //Load Journeys data according page, limit, sort field and sort order
  useEffect(() => {
    const fetchJourneysData = async () => {
      setLoading(true);
      try {
        const response = await fetch(journeysURI);
        const data = await response.json();
        setJourneys(data);
      } catch (err) {
        alert(err);
      }
      setLoading(false);
    };

    fetchJourneysData();
  }, [journeysURI]);

  const displayJourneysList = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setDisplayJourneys(!displayJourneys);
  };

  // Button event to change request params to journey data.
  const changeSortingOrder = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const changeState = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(changeState);
    setPageOptions(defaultPageOption);
  };

  // Button event to change request params to journey data.
  const changeSortingRow = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const button: HTMLButtonElement = event.currentTarget;
    const buttonName = button.name as sortByType;
    setSortBy(buttonName);
    setPageOptions(defaultPageOption);
    journeysURI = `${JOURNEYS_URL}/${pageOptions.page}/${pageOptions.limit}/${sortBy}/${sortOrder}/`;
  };

  // Button event to change request params to journey data.
  const changePageNext = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const nextPage: IPageoptions = {
      page: pageOptions.page + 1,
      limit: defaultPageOption.limit,
    };
    setPageOptions(nextPage);
  };

  // Button event to change request params to journey data.
  const changePagePrev = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (pageOptions.page === 0) {
      return;
    }
    const nextPage: IPageoptions = {
      page: pageOptions.page - 1,
      limit: defaultPageOption.limit,
    };
    setPageOptions(nextPage);
  };

  // If no data is loaded, show loading text
  if (journeys === null) {
    return <LoadSpinner loadingText={"Journeys loading"} />;
  }

  // If data is loaded, but not displayed, show button to display data
  if (!displayJourneys) {
    return (
      <>
        <h1 className="header-style">
          {" "}
          JOURNEYS LIST
          <span className="span-style">
            <Button size="sm" onClick={displayJourneysList}>
              Show
            </Button>
          </span>
        </h1>
      </>
    );
  }

  const sortOrderDisplay = sortOrder === "asc" ? "ASC" : "DESC";

  return (
    <>
      <h1 className="header-style">
        JOURNEYS LIST
        <span className="span-style">
          <Button size="sm" onClick={displayJourneysList}>
            {displayJourneys ? "Hide" : "Show"}
          </Button>
        </span>
      </h1>

      <>
        <Table striped bordered hover size="sm" className="tableWidth">
          <thead>
            <tr>
              <th
                style={{ width: "10%" }}
                className="table-header-fixed-height"
              >
                <Button
                  disabled={isLoading}
                  className="btn-style"
                  size="sm"
                  variant="danger"
                  onClick={changeSortingOrder}
                >
                  {sortOrderDisplay}
                </Button>
              </th>
              <th
                style={{ width: "20%" }}
                className="table-header-fixed-height"
              >
                Departure Station{" "}
                <Button
                  disabled={isLoading}
                  className="btn-style"
                  size="sm"
                  name="Departure_station_name"
                  onClick={changeSortingRow}
                >
                  SORT
                </Button>
              </th>
              <th
                style={{ width: "20%" }}
                className="table-header-fixed-height"
              >
                Return Station{" "}
                <Button
                  disabled={isLoading}
                  className="btn-style"
                  size="sm"
                  name="Return_station_name"
                  onClick={changeSortingRow}
                >
                  SORT
                </Button>
              </th>
              <th
                style={{ width: "10%" }}
                className="table-header-fixed-height"
              >
                Dist km{" "}
                <Button
                  disabled={isLoading}
                  className="btn-style"
                  size="sm"
                  name="Covered_distance"
                  onClick={changeSortingRow}
                >
                  SORT
                </Button>
              </th>
              <th
                style={{ width: "10%" }}
                className="table-header-fixed-height"
              >
                Duration min{" "}
                <Button
                  disabled={isLoading}
                  className="btn-style"
                  size="sm"
                  name="Duration"
                  onClick={changeSortingRow}
                >
                  SORT
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>
            {journeys.map((journey: IJourneyItem, index: number) => (
              <JourneyItem
                key={index}
                _id={journey._id}
                count={pageOptions.page * pageOptions.limit + index}
                Departure_station_name={journey.Departure_station_name}
                Return_station_name={journey.Return_station_name}
                Covered_distance={Number(
                  (journey.Covered_distance / 1000).toFixed(2)
                )} //Convert meters to kilometers
                Duration={Number((journey.Duration / 60).toFixed(2))} // Convert seconds to minutes
              />
            ))}
          </tbody>
        </Table>
        <div className="info-container">
          <InfoAboutSort sortBy={sortBy} sortOrder={sortOrder} />
          <PageChanger
            isLoading={isLoading}
            changePagePrev={changePagePrev}
            changePageNext={changePageNext}
          />
        </div>
      </>
    </>
  );
};

export default Journeys;
