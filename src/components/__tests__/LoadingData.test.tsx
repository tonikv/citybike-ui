import { render, screen } from '@testing-library/react';
import LoadingData from '../LoadingData';

describe('LoadingData component', () => {
  test('LoadingData component renders a loading spinner', () => {
    render(<LoadingData />);
    const spinner = screen.getByText(/loading/i);
    expect(spinner).toBeInTheDocument();
  });
});
