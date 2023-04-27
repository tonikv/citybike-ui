/**
 * Form for selecting station from list
 */

import { Form } from "react-bootstrap";
import { IStationItem, ISelectStation } from "../types";

const StationSelect = ({ stationItems, changeStation }: ISelectStation) => {

    return (
        <div className="select-station-main">
            <h4 className="select-station-header">Station</h4>
            <Form.Select
                className='select-station-form'
                aria-label="Select station from list"
                onChange={changeStation}
            >
                <option>Select station by name</option>
                {stationItems.map((station: IStationItem, index: number) => {
                    return (
                        <option data-testid="options" key={index} value={index}>{station.Nimi}</option>
                    )
                })}
            </Form.Select>
        </div>
    )
};

export default StationSelect;
