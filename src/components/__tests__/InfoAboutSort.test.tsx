import { render, screen } from '@testing-library/react';
import InfoAboutSort from '../JourneysInfoAboutSort';

describe('InfoAboutSort component', () => {
  test('renders info about query descending', () => {
    render(<InfoAboutSort sortBy={"Duration"} sortOrder={"desc"} />);
    const pElement = screen.getByText(/Sorted by/i);
    expect(pElement).toBeInTheDocument();
    expect(pElement).toHaveStyle('display: block');
    expect(pElement).toHaveTextContent("Sorted by Duration in descending order");
  });

  test('renders info about query ascending', () => {
    render(<InfoAboutSort sortBy={"Covered_distance"} sortOrder={"asc"} />);
    const pElement = screen.getByText(/Sorted by/i);
    expect(pElement).toBeInTheDocument();
    expect(pElement).toHaveTextContent("Sorted by Distance in ascending order");
  });

});
