import * as React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import * as renderer from 'react-test-renderer';

import NewListingButton from './NewListingButton';

describe('NewListingButton', () => {
  const onPressMock = jest.fn();

  it('render correctly', () => {
    const component = renderer.create(
      <NewListingButton onPress={onPressMock} />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('call on press function', () => {
    const { getByTestId } = render(<NewListingButton onPress={onPressMock} />);
    const newButton = getByTestId('newListingButton');

    fireEvent.press(newButton);
    expect(onPressMock).toHaveBeenCalled();
  });
});
