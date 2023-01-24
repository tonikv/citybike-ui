import { useState, useEffect } from 'react';
import Header from './components/Header';
import SelectStation from './components/SelectStation';
import StationItem from './components/StationItem';
import JourneyItems from './components/JourneyItems';
import './App.css';
import { IPageoptions, IStationItem, IJourneyItem, sortOrderType, sortByType } from './types';

function App() {
  const defaultPageOption: IPageoptions = { page: 0, limit: 10 };
  const [station, setStation] = useState<IStationItem | null>(null);
  const [allStations, setAllStations] = useState<IStationItem[] | null>(null);
  const [journeys, setJourneys] = useState<IJourneyItem[] | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<sortByType>("Duration");
  const [sortOrder, setSortOrder] = useState<sortOrderType>("asc");
  const [pageOptions, setPageOptions] = useState<IPageoptions>(defaultPageOption);
  const BASE_URL = "https://citybike.onrender.com";

  // URI to access server for data.
  let journeysURI = `${BASE_URL}/journeys/sorted/${pageOptions.page}/${pageOptions.limit}/${sortBy}/${sortOrder}/`;

  // Load stations data and pass it to application state. Loads whole stations data. Also sets first station to state.
  useEffect(() => {
    const fetchAllStationsData = async () => {
      try {
        const allStationsResponse = await fetch("https://citybike.onrender.com/stations/all");
        const allStationsData = await allStationsResponse.json()
        setAllStations(allStationsData);
        setStation(allStationsData[0]);
      } catch (err) {
        alert(err);
      }
    };

    fetchAllStationsData();
  }, [])

  // Load Journeys data according page, limit, sort field and sort order
  useEffect(() => {
    const fetchJourneysData = async () => {
      setLoading(true);
      try {
        const response = await fetch(journeysURI);
        const data = await response.json()
        setJourneys(data);
      } catch (err) {
        alert(err);
      }
      setLoading(false);
    };

    fetchJourneysData();

  }, [journeysURI]);


   // This function is called when user selects station from dropdown list. Changes station state.
  const changeStation = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    if (allStations === null || allStations === undefined) return;

    const pickStation = allStations.find((station) => station.FID === parseInt(event.target.value));
    if (pickStation === undefined) return;
    setStation(pickStation);
  }

  // Button event to change request params to journey data.
   const changeSortingOrder = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const changeState = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(changeState);
    setPageOptions(defaultPageOption);
  }

  // Button event to change request params to journey data.
  const changeSortingRow = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const button: HTMLButtonElement = event.currentTarget;
    const buttonName = button.name as sortByType;
    setSortBy(buttonName);
    setPageOptions(defaultPageOption);
    journeysURI = `${BASE_URL}/journeys/sorted/${pageOptions.page}/${pageOptions.limit}/${sortBy}/${sortOrder}/`;
  };

  // Button event to change request params to journey data.
  const changePageNext = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const nextPage:IPageoptions = {
      page: pageOptions.page + 1,
      limit: defaultPageOption.limit,
    }
    setPageOptions(nextPage);
  }

  // Button event to change request params to journey data.
  const changePagePrev = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (pageOptions.page === 0) {
      return;
    }
    const nextPage:IPageoptions = {
      page: pageOptions.page - 1,
      limit: defaultPageOption.limit,
    }
    setPageOptions(nextPage);
  }

  return (
    <div className="App-container">
      <Header />
      <div className="Content-container">
          <SelectStation
            stationItems={allStations}
            changeStation={changeStation}
          />
          <StationItem
            station={station}
          />

        <JourneyItems
            isLoading={isLoading}
            journeyItems={journeys}
            pageOptions={pageOptions}
            sortBy={sortBy}
            sortOrder={sortOrder}
            changeSortingRow={changeSortingRow}
            changeSortingOrder={changeSortingOrder}
            changePageNext={changePageNext}
            changePagePrev={changePagePrev}
        />

      </div>
    </div>
  );
}

export default App;
