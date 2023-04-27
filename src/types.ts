export type sortOrderType = "asc" | "desc";
export type sortByType = "count" | "Departure_station_name" | "Return_station_name" | "Covered_distance" | "Duration";

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
    Starting_station_count: number,
    Average_journey_distance_starting: Number,
    Average_journey_distance_ending: Number,
}

//SelectStation component
export interface ISelectStation {
    stationItems:  IStationItem[],
    changeStation(event: React.ChangeEvent<HTMLSelectElement>): void
}

//Stations component
export interface IStations {
    handleStationIDChange(event: React.ChangeEvent<HTMLSelectElement>): void,
}

//

//StationItem component
export interface IStationShow {
    station: IStationItem
}

export interface IStationData {
    Departure_station_name: string,
    Return_station_name: string,
    count: number,
}

export interface IStationDataList {
    stationDataList: IStationData[] | null,
}

export interface ICoords {
    lat: number,
    lng: number,
}

export interface IStationMap {
    station: IStationItem
}

export interface IPageoptions {
    page: number,
    limit: number,
}

export interface IJourneyItem {
    _id: string,
    count: number,
    Departure_station_name: string,
    Return_station_name: string,
    Covered_distance: number,
    Duration: number,
}

export interface IJourneyList {
    journeyItems: IJourneyItem[] | null,
    pageOptions: IPageoptions,
    sortOrder: sortOrderType,
    sortBy: string,
    isLoading: boolean,
    changeSortingRow(event: React.MouseEvent<HTMLButtonElement>): void
    changeSortingOrder(event: React.MouseEvent<HTMLButtonElement>): void
    changePageNext(event: React.MouseEvent<HTMLButtonElement>): void
    changePagePrev(event: React.MouseEvent<HTMLButtonElement>): void
}

export interface IPageChanger {
    isLoading: boolean,
    changePageNext(event: React.MouseEvent<HTMLButtonElement>): void
    changePagePrev(event: React.MouseEvent<HTMLButtonElement>): void
}
