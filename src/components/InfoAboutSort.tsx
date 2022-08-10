/*
    Show current sorting parameters to user. State comes from main app.
*/

import { IInfoSort } from '../types';

const mainStyle = {
    textAlign: "center" as "center",
    paddingTop: 2
}

const highlightStyle = {
    backgroundColor: "rgb(235, 37, 73)",
    color: "white",
    padding: 2
}

const InfoSort: React.FC<IInfoSort> = ({ sortBy, sortOrder }) => {
    let sortOrderDisplay = sortOrder === "1" ? "in ascending order" : "in descending order"

    return (
        <p style={mainStyle}>Sorted by <span style={highlightStyle}>{sortBy.toUpperCase()}</span> {sortOrderDisplay}</p>
    )
}

export default InfoSort