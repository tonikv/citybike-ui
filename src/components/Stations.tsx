/**
 * Fetches station data from the API and renders page with StationSelect, StationItem and StationMap components.
 */

import React, { useState, useEffect } from 'react';
import { IStationItem } from '../types';
import { useFetchData } from '../useFetchData';
import { useMemo } from 'react';
import StationItem from './StationItem';
import StationMap from './StationMap';
import StationSelect from './StationSelect';
import '../styles/Stations.css';

const STATIONS_URL = "https://citybike.onrender.com/stations/all";

const Stations = () => {
  const { data: stationItems, isLoading } = useFetchData<IStationItem[]>(STATIONS_URL, []);
  const [selectedStation, setSelectedStation] = useState<IStationItem | null>(null);

  useEffect(() => {
    if (stationItems && stationItems.length > 0) {
        setSelectedStation(stationItems[0]);
    }
  }, [stationItems]);

    const memoizedStation = useMemo(() => {

        if (isLoading ) {
            return <p>Loading stations...</p>;
        }

        const changeStation = (event: React.ChangeEvent<HTMLSelectElement>) => {
            let selectedIndex = parseInt(event.target.value, 10);
            selectedIndex = Number.isNaN(selectedIndex) ? selectedIndex = 0 : selectedIndex;
            setSelectedStation(stationItems[selectedIndex]);
        };

        return (
            <div className='station-content'>
                <StationSelect
                    stationItems={stationItems}
                    changeStation={changeStation}
                />
                {selectedStation &&
                    <>
                        <StationItem station={selectedStation} />
                        <StationMap station={selectedStation} />
                    </>
                }
            </div>
        )
    }, [stationItems, selectedStation, isLoading]);
     return memoizedStation
};

export default Stations;
