import React from 'react';
import {render, screen} from '@testing-library/react-native';
import HelloWorld from './HelloWorld';

describe('HelloWorld', () => {
  it('renders the correct message', () => {
    render(<HelloWorld/>);
    expect(screen.getByText('Hello, world!')).toBeVisible();
  });
});