/*
    Show current sorting parameters to user. State comes from main app.
*/

import { IInfoSort } from '../types';

const mainStyle = {
    textAlign: "center" as "center",
}

const highlightStyle = {
    backgroundColor: "rgb(235, 37, 73)",
    boxShadow: "0 0 5px 1px rgb(0, 0, 0)",
    color: "white",
    padding: 5
}

const InfoSort: React.FC<IInfoSort> = ({ sortBy, sortOrder }) => {
    const sortOrderDisplay = sortOrder === "asc" ? "in ascending order" : "in descending order"

    return (
        <p style={mainStyle}>Sorted by <span style={highlightStyle}>{sortBy.toUpperCase()}</span> {sortOrderDisplay}</p>
    )
}

export default InfoSort
