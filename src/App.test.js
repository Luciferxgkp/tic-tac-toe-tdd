import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('Game Board', () => {
  it('Should renders a board', () => {
    render(<App />);
    const board = screen.getByTestId('game-board');
    expect(board).not.toBeNull();
  });

  it('Should renders a board with 9 squares', () => {
    render(<App />);
    const squares = screen.getAllByTestId('square');
    expect(squares.length).toBe(9);
  });

}
)

describe('Game Functionality', () => {
  it('Should render an X when a square is clicked', () => {
    render(<App />);
    const square = screen.getAllByTestId('square');
    fireEvent.click(square[0]);
    expect(square[0].textContent).toBe('X');
  });

  it('Should render an O when a square is clicked', () => {
    render(<App />);
    const square = screen.getAllByTestId('square');
    fireEvent.click(square[0]);
    fireEvent.click(square[1]);
    expect(square[1].textContent).toBe('O');
  });

  it('Should Change the player after each turn', () => {
    render(<App />);
    const square = screen.getAllByTestId('square');
    fireEvent.click(square[0]);
    fireEvent.click(square[1]);
    expect(square[1].textContent).toBe('O');
  }
  )

  it('Should not allow a square to be clicked twice', () => {
    render(<App />);
    const square = screen.getAllByTestId('square');
    fireEvent.click(square[0]);
    fireEvent.click(square[0]);
    expect(square[0].textContent).toBe('X');
  }
  )

  it('Should declare a winner when a player has 3 in a row', () => {
    render(<App />);
    const square = screen.getAllByTestId('square');
    fireEvent.click(square[0]);
    fireEvent.click(square[3]);
    fireEvent.click(square[1]);
    fireEvent.click(square[4]);
    fireEvent.click(square[2]);
    expect(screen.getByText('Winner: X')).not.toBeNull();
  }
  )

  it('Should declare a winner when a player has 3 in a row', () => {
    render(<App />);
    const square = screen.getAllByTestId('square');
    fireEvent.click(square[0]);
    fireEvent.click(square[3]);
    fireEvent.click(square[1]);
    fireEvent.click(square[4]);
    fireEvent.click(square[6]);
    fireEvent.click(square[5]);
    expect(screen.getByText('Winner: O')).not.toBeNull();
  }
  )

  it('Should able to go back to a previous move', () => {
    render(<App />);
    const square = screen.getAllByTestId('square');
    fireEvent.click(square[0]);
    fireEvent.click(square[3]);
    fireEvent.click(square[1]);
    fireEvent.click(square[4]);
    fireEvent.click(square[6]);
    fireEvent.click(square[5]);
    const button = screen.getByText('Go to move #2');
    fireEvent.click(button);
    expect(square[5].textContent).toBe('');
  }
  )
}
)

