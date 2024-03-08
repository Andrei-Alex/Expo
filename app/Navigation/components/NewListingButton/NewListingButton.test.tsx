import * as React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import NewListingButton from './NewListingButton';

describe('NewListingButton', () => {
  const onPressMock = jest.fn();

  it('call on press function', () => {
    const { getByTestId } = render(<NewListingButton onPress={onPressMock} />);
    const newButton = getByTestId('newListingButton');

    fireEvent.press(newButton);
    expect(onPressMock).toHaveBeenCalled();
  });
});
