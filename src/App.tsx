import { useState, useEffect } from 'react';
import Header from './components/Header';
import SelectStation from './components/SelectStation';
import StationItem from './components/StationItem';
import './App.css';

const BASE_URL = "https://citybikedata.herokuapp.com"

function App() {
  const [station, setStation] = useState({ single: null, all: null });
  const [coords, setCoords] = useState({ x: 25.00, y: 60.00 })
  const [isLoading, setLoading] = useState<boolean>(false);
  
  // URI to access server for data
  let allStationsURI = `${BASE_URL}/stations/all`;
  let stationByFidURI = `${BASE_URL}/stations/byFID/1`;

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
      </div>
    </div>
  );
}

export default App;
