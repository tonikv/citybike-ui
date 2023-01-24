import { render, screen } from '@testing-library/react';
import PageChanger from '../PageChanger';

describe('PageChanger component', () => {

  test('PageChanger component renders next and prev buttons', () => {
    render(<PageChanger changePageNext={() => { }} changePagePrev={() => { }} isLoading={false} />);
    const nextButton = screen.getByText(/next page/i);
    const prevButton = screen.getByText(/prev page/i);
    expect(nextButton).toBeInTheDocument();
    expect(prevButton).toBeInTheDocument();
  });

  test('PageChanger component renders loading spinner when isLoading is true', () => {
    render(<PageChanger changePageNext={() => { }} changePagePrev={() => { }} isLoading={true} />);
    const nextButton = screen.queryByText(/next page/i);
    const prevButton = screen.queryByText(/prev page/i);
    expect(nextButton).not.toBeInTheDocument();
    expect(prevButton).not.toBeInTheDocument();
    const spinner = screen.getByText(/loading/i);
    expect(spinner).toBeInTheDocument();
  });

});
