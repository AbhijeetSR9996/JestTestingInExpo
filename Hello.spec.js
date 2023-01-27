import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import NewMessageForm from './NewMessageForm';

describe('NewMessageForm', () => {
  describe('clicking send', () => {
    it('clears the message field', () => {
      render(<NewMessageForm />);

      fireEvent.changeText(screen.getByPlaceholderText('Message'), 'Hello world');
      fireEvent.press(screen.getByText('Send'));

      expect(screen.getByPlaceholderText('Message')).toHaveProp('value', '');
    });
  });
});


// import React from 'react';
// import {render, screen} from '@testing-library/react-native';
// import Hello from './Hello';

// describe('Hello', () => {
//   it('displays the passed-in name', () => {
//     render(<Hello name="Josh" />);
//     expect(screen.getByText('Hello, Josh!')).toBeVisible();
//   });
// });

