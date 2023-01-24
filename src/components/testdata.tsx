const testStations = [
    {
        _id: "62dec272b679ff2f71f84347",
        FID: 5,
        ID: 509,
        Nimi: "Revontulentie",
        Osoite: "Revontulentie 10",
        Kaupunki: "Espoo",
        Operaattori: "CityBike Finland",
        Kapasiteetti: 30,
        x: 24.802938,
        y: 60.171551,
        __v: 0,
        Ending_station_count: 1720,
        Starting_station_count: 1718,
        Average_journey_distance_ending: 2942.0691860465117,
        Average_journey_distance_starting: 2961.8055878928985
    },
    {
        _id: "62dec272b679ff2f71f84348",
        FID: 6,
        ID: 510,
        Nimi: "Golfpolku",
        Osoite: "Golfpolku 3",
        Kaupunki: "Espoo",
        Operaattori: "CityBike Finland",
        Kapasiteetti: 16,
        x: 24.796136,
        y: 60.168143,
        __v: 0,
        Ending_station_count: 717,
        Starting_station_count: 747,
        Average_journey_distance_ending: 2961.8055878928985,
        Average_journey_distance_starting: 2961.8055878928985
    },
    {
        _id: "62dec272b679ff2f71f84349",
        FID: 7,
        ID: 511,
        Nimi: "Hanasaari",
        Osoite: "Hanasaarenranta 1",
        Kaupunki: "Espoo",
        Operaattori: "CityBike Finland",
        Kapasiteetti: 10,
        x: 24.840319,
        y: 60.16582,
        __v: 0,
        Ending_station_count: 2427,
        Starting_station_count: 2356,
        Average_journey_distance_ending: 444.8055878928985,
        Average_journey_distance_starting: 444.8055878928985
    },
]



const testJourneys = [
        {
            _id: "1",
            count: 0,
            Departure: Date.now(),
            Return: Date.now(),
            Departure_station_id: 82,
            Departure_station_name: "Töölöntulli",
            Return_station_id: 113,
            Return_station_name: "Pasilan asema",
            Covered_distance: 1870,
            Duration: 611
        },
        {
            _id: "2",
            count: 1,
            Departure: Date.now(),
            Return: Date.now(),
            Departure_station_id: 123,
            Departure_station_name: "Näkinsilta",
            Return_station_id: 121,
            Return_station_name: "Vilhonvuorenkatu",
            Covered_distance: 1025,
            Duration: 399
        },
    ];

export {
    testStations,
    testJourneys
}
