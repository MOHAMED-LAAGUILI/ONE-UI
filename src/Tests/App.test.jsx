import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from '@/App';

test('renders the app component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to the App/i);
  expect(linkElement).toBeInTheDocument();
});
