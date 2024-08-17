import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Developer portfolio header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Developer portfolio/i);
  expect(linkElement).toBeInTheDocument();
});
