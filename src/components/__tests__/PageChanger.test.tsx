/* eslint-disable @typescript-eslint/no-empty-function */

import { render, screen, fireEvent } from "@testing-library/react";
import PageChanger from "../JourneysPageChanger";

describe("PageChanger component", () => {
  test("PageChanger component renders next and prev buttons", () => {
    render(
      <PageChanger
        changePageNext={() => {}}
        changePagePrev={() => {}}
        isLoading={false}
      />
    );

    // Get the buttons by their aria-labels
    const nextButton = screen.getByLabelText(/next page button/i);
    const prevButton = screen.getByLabelText(/prev page button/i);

    // Check if the buttons are rendered
    expect(nextButton).toBeInTheDocument();
    expect(prevButton).toBeInTheDocument();
  });

  test("PageChanger disables buttons when isLoading is true", () => {
    render(
      <PageChanger
        changePageNext={() => {}}
        changePagePrev={() => {}}
        isLoading={true}
      />
    );

    // Get the buttons by their aria-labels
    const nextButton = screen.queryByLabelText(/next page button/i);
    const prevButton = screen.queryByLabelText(/prev page button/i);

    // Check if the buttons are disabled
    expect(nextButton).toBeDisabled();
    expect(prevButton).toBeDisabled();
  });

  test("PageChanger component triggers changePageNext and changePagePrev functions when buttons are clicked", () => {
    const changePageNext = jest.fn();
    const changePagePrev = jest.fn();

    render(
      <PageChanger
        changePageNext={changePageNext}
        changePagePrev={changePagePrev}
        isLoading={false}
      />
    );

    const nextButton = screen.getByLabelText(/next page button/i);
    const prevButton = screen.getByLabelText(/prev page button/i);

    // Simulate button clicks
    fireEvent.click(nextButton);
    fireEvent.click(prevButton);

    // Check if the corresponding functions were called
    expect(changePageNext).toHaveBeenCalledTimes(1);
    expect(changePagePrev).toHaveBeenCalledTimes(1);
  });
});
