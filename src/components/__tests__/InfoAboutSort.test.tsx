import { render, screen } from '@testing-library/react';
import InfoAboutSort from '../InfoAboutSort';

describe('InfoAboutSort component', () => {
  test('renders info about query descending', () => {
    render(<InfoAboutSort sortBy={"DURATION"} sortOrder={"desc"} />);
    const pElement = screen.getByText(/Sorted by/i);
    expect(pElement).toBeInTheDocument();
    expect(pElement).toHaveStyle('display: block');
    expect(pElement).toHaveTextContent("Sorted by DURATION in descending order");
  });

  test('renders info about query ascending', () => {
    render(<InfoAboutSort sortBy={"DISTANCE"} sortOrder={"asc"} />);
    const pElement = screen.getByText(/Sorted by/i);
    expect(pElement).toBeInTheDocument();
    expect(pElement).toHaveTextContent("Sorted by DISTANCE in ascending order");
  });

});
