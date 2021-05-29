import React from 'react';
import { render } from '@testing-library/react';
import Stock from "./Stock";

test('renders learn react link', () => {
  const { getByText } = render(<Stock />);
  const linkElement = getByText(/This is Stock/i);
  expect(linkElement).toBeInTheDocument();
});