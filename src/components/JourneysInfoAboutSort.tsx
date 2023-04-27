/*
    Show current sorting parameters to user.
*/

type sortOrderType = "asc" | "desc";
type sortByType = "count" | "Departure_station_name" | "Return_station_name" | "Covered_distance" | "Duration";

interface IInfoSort {
    sortBy: sortByType,
    sortOrder: sortOrderType,
}

const JourneysInfoSort: React.FC<IInfoSort> = ({ sortBy, sortOrder }) => {
  const sortOrderDisplay = sortOrder === "asc" ? "in ascending order" : "in descending order"
  let sortDisplay = "";

  switch (sortBy) {
    case "count":
      sortDisplay = "Count";
      break;
    case "Departure_station_name":
      sortDisplay = "Departure Station";
      break;
    case "Return_station_name":
      sortDisplay = "Return Station";
      break;
    case "Covered_distance":
      sortDisplay = "Distance";
      break;
    case "Duration":
      sortDisplay = "Duration";
      break;
    default:
      sortDisplay = "Count";
      break;
  }


    return (
    <p className="infoSortContainer">
      Sorted by{' '}
      <span className="highlightSort">{sortDisplay}</span>{' '}
      {sortOrderDisplay}
    </p>
  )
}

export default JourneysInfoSort
