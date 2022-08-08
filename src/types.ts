export interface IStationItem {
    FID: number,
    ID: number,
    Nimi: string,
    Osoite: string,
    Kaupunki: string,
    Operaattori: string,
    Kapasiteetti: number,
    x: number,
    y: number,
    Ending_station_count: number,
    Starting_station_count: number
}

//SelectStation component
export interface ISelectStation {
    stationItems:  IStationItem[] | null,
    changeStation(event: React.ChangeEvent<HTMLSelectElement>): void
}

//StationItem component
export interface IStationShow {
    singleStation: IStationItem | null,
}

export interface ICoords {
    x: number,
    y: number
}

export interface IStationMap {
    coords: ICoords
}