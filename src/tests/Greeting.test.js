import React from 'react'
import { render, getByTestId } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Greeting from '../Greeting';


test('loads and displays greeting', () => {
  const { getByTestId } = render(<Greeting/>);
  const greetingTextNode = getByTestId('test-testid');
  expect(greetingTextNode).toHaveTextContent('Hi there');
})