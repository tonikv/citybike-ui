import React from 'react'
import Form from 'react-bootstrap/Form'
import { ISelectStation, IStationItem } from '../types'
/*
  Gives user option to choose station to show on StationItem and StationMap components.
*/

const mainStyle = {
    paddingTop: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row" as "row" 
}

const headerStyle = {
    marginTop: "5px",
    marginRight: "5px",
    fontSize: "x-large"
}

const SelectStation: React.FC<ISelectStation> = ({ stationItems, changeStation }) => {
  if (stationItems === null) return <></>

  return (
    <div style={mainStyle}>
      <h4 style={headerStyle}>Station</h4>
      <Form.Select aria-label="Default select example" onChange={changeStation}>
            <option>Select station by name</option>
        {stationItems.map((station: IStationItem, index: number) => {
                return (
                    <option key={index} value={station.FID}>{station.Nimi}</option>
              )  
            })}
      </Form.Select>
    </div>
  )
}

export default SelectStation