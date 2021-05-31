import React from 'react';
import { render } from '@testing-library/react';
import Stock from "./Stock";

test('renders company name', () => {
  const { getByText } = render(<Stock />);
  const linkElement = getByText(/company:/i);
  expect(linkElement).toBeInTheDocument();
});