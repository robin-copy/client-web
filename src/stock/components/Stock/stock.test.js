import React from 'react';
import { render } from '@testing-library/react';
import Stock from "./Stock";

test('renders company label', () => {
  const { getByText } = render(<Stock />);
  const linkElement = getByText(/company:/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders value label', () => {
  const { getByText } = render(<Stock />);
  const linkElement = getByText(/Stock value:/i);
  expect(linkElement).toBeInTheDocument();
});