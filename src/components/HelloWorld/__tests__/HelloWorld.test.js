import React from 'react';
import { render } from '../../../utils/testUtils';
import HelloWorld from '../';

it('renders successfully', () => {
  render(<HelloWorld />);
});

it('should render a h1 element', () => {
  const { container, getByText } = render(<HelloWorld />);

  const helloWorldHeader = getByText('Hello World');
  expect(helloWorldHeader).not.toBeNull();
  const h1Element = container.querySelector('h1');
  expect(h1Element).not.toBeNull();
});
