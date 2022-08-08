import { useState, useEffect } from 'react';
import Header from './components/Header';
import SelectStation from './components/SelectStation';
import StationItem from './components/StationItem';
import StationMap from './components/StationMap';
import JourneyItems from './components/JourneyItems';
import './App.css';
import { IPageoptions} from './types';

const BASE_URL = "https://citybikedata.herokuapp.com"

function App() {
  const defaultPageOption:IPageoptions = {
    page: 0,
    limit: 10,
  }

  const [station, setStation] = useState({ single: null, all: null });
  const [journeys, setJourneys] = useState([]);
  const [coords, setCoords] = useState({ x: 25.00, y: 60.00 });
  const [isLoading, setLoading] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>("Duration");
  const [sortOrder, setSortOrder] = useState<string>("-1");
  const [pageOptions, setPageOptions] = useState<IPageoptions>(defaultPageOption)
  
  // URI to access server for data
  let allStationsURI = `${BASE_URL}/stations/all`;
  let stationByFidURI = `${BASE_URL}/stations/byFID/1`;
  let journeysURI = `${BASE_URL}/journeys/sorted/${pageOptions.page}/${pageOptions.limit}/${sortBy}/${sortOrder}/`;

  // Load stations data and pass it to application state. Loads whole stations data and one according to user selection.
  useEffect(() => {
    const fetchStationsData = async () => {
      setLoading(true);
      try {
        const allStationsResponse = await fetch(allStationsURI);
        const singleStationResponse = await fetch(stationByFidURI);
        const allStationsData = await allStationsResponse.json()
        const singleStationData = await singleStationResponse.json();

        setStation({
          single: singleStationData, 
          all: allStationsData,
        });

        setLoading(false);
      } catch (err) {
        alert(err);
      }
    };

    fetchStationsData();
  }, [allStationsURI, stationByFidURI]);

  // Load Journeys data according page, limit, sort field and sort order
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(journeysURI);
        const data = await response.json()
        setJourneys(data);
        setLoading(false);
      } catch (err) {
        alert(err);
      }
    };

    fetchData();
  }, [journeysURI]);


   /* Used in SelectStation component. This will get selected station FID information from form selector 
  and fetch station data from database. StationItem component then renders information accordingly*/
  const changeStation = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const fetchStation = await fetch(`${BASE_URL}/stations/byFID/${event.target.value}`);
    try {
      setLoading(true);
      const data = await fetchStation.json();
      
      setStation({
        single: data,
        all: station.all,
      });
      setCoords({
        x: data.x,
        y: data.y
      });
      setLoading(false);

    } catch (err) {
      alert(err);
    }
  }

  // Functions to change request params to journey data
   const changeSortingOrder = (event: React.MouseEvent<HTMLButtonElement>) => { 
    event.preventDefault();
    let changeState = sortOrder === "-1" ? "1" : "-1";
    setSortOrder(changeState);
  }

  const changeSortingRow = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const button: HTMLButtonElement = event.currentTarget;
    setSortBy(button.name);
    setPageOptions(defaultPageOption);
    journeysURI = `${BASE_URL}/journeys/sorted/${pageOptions.page}/${pageOptions.limit}/${sortBy}/${sortOrder}/`;
  };

  const changePageNext = (event: React.MouseEvent<HTMLButtonElement>) => { 
    event.preventDefault();
    const nextPage:IPageoptions = {
      page: pageOptions.page + 1,
      limit: defaultPageOption.limit,
    }
    setPageOptions(nextPage);
  }

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
            stationItems={station.all}
            changeStation={changeStation}
          />
          <StationItem
            singleStation={station.single}
          />
          <StationMap
            coords={coords}
        />
        
        <JourneyItems
            journeyItems={journeys}
            pageOptions={pageOptions}
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
