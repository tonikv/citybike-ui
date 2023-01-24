import { render, screen } from '@testing-library/react';
import SelectStation from '../SelectStation';
import { testStations } from '../testdata';

describe('SelectStation', () => {
  it('renders the correct number of options', () => {
    render(<SelectStation stationItems={testStations} changeStation={() => {}} />);
      const options = screen.getAllByTestId ('options');
    expect(options).toHaveLength(3);
  });
});
