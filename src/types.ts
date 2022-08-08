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
    journeyItems: IJourneyItem[],
    pageOptions: IPageoptions,
    sortOrder: string,
    changeSortingRow(event: React.MouseEvent<HTMLButtonElement>): void
    changeSortingOrder(event: React.MouseEvent<HTMLButtonElement>): void
    changePageNext(event: React.MouseEvent<HTMLButtonElement>): void
    changePagePrev(event: React.MouseEvent<HTMLButtonElement>): void
}

export interface IInfoSort {
    sortBy: string,
    sortOrder: string,
}

export interface IPageChanger {
    isLoading: boolean,
    changePageNext(event: React.MouseEvent<HTMLButtonElement>): void
    changePagePrev(event: React.MouseEvent<HTMLButtonElement>): void
}