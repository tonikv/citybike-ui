import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StationSelect from "../StationSelect";
import { testStations } from "../testdata";

describe("StationSelect", () => {
  const setup = () => {
    const changeStationMock = jest.fn();
    render(
      <StationSelect
        stationItems={testStations}
        changeStation={changeStationMock}
      />
    );
    return {
      select: screen.getByRole("combobox"),
      changeStationMock,
    };
  };

  test("renders select element with correct options", () => {
    const { select } = setup();
    expect(select).toBeInTheDocument();
    expect(screen.getAllByTestId("options").length).toBe(testStations.length);
  });

  test("calls changeStation when an option is selected", () => {
    const { select, changeStationMock } = setup();
    fireEvent.change(select, { target: { value: "1" } });
    expect(changeStationMock).toHaveBeenCalledTimes(1);
  });
});
