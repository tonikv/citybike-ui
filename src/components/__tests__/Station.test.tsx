import { render, screen } from "@testing-library/react";
import Stations from "../Stations";
import { useFetchData } from "../../useFetchData";
import { testStations } from "../testdata";

// Mock the useFetchData custom hook
jest.mock("../../useFetchData");

const mockedUseFetchData = useFetchData as jest.Mock;

describe("Stations component", () => {
  beforeEach(() => {
    mockedUseFetchData.mockClear();
  });

  test("renders loading message when fetching data", () => {
    // Mock the isLoading state as true
    mockedUseFetchData.mockReturnValue({
      data: [],
      isLoading: true,
    });

    render(<Stations />);
    const loadingMessage = screen.getAllByText(/Stations loading/i);
    expect(loadingMessage[0]).toBeInTheDocument();
  });

  test("renders StationSelect, StationItem, and StationMap components when data is available", async () => {
    // Mock the fetched data and isLoading state as false
    mockedUseFetchData.mockReturnValue({
      data: testStations,
      isLoading: false,
    });

    render(<Stations />);

    // Wait for the StationSelect component to be rendered
    const stationSelect = await screen.findByRole("combobox");
    expect(stationSelect).toBeInTheDocument();

    // Check if StationItem component is rendered
    const stationItem = screen.getByRole("article");

    expect(stationItem).toBeInTheDocument();
  });
});
