import React from 'react'
import { render, getByTestId } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PalletList from '../PalletList';


test('loads and displays greeting', () => {
  const { getByTestId } = render(<PalletList/>);
  const greetingTextNode = getByTestId('test-testid');
  expect(greetingTextNode).toHaveTextContent('Available Pallets');
})