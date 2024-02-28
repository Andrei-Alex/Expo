import React from 'react';
import renderer from 'react-test-renderer';
import AppPicker from './AppPicker';
import { render, fireEvent } from '@testing-library/react-native';

describe('AppPicker Component', () => {
  const onSelectItemMock = jest.fn();

  it('renders correctly with a placeholder', () => {
    const component = renderer.create(
      <AppPicker
        items={[
          { label: 'Item 1', value: 1 },
          { label: 'Item 2', value: 2 }
        ]}
        placeholder="Select an item"
      />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('opens modal on touchable press', () => {
    const { getByTestId } = render(
      <AppPicker
        items={[
          { label: 'Item 1', value: 1 },
          { label: 'Item 2', value: 2 }
        ]}
        placeholder="Select an item"
      />
    );

    const touchable = getByTestId('pickerTestID');
    fireEvent.press(touchable);

    const modal = getByTestId('modalPickerID');
    expect(modal).toBeTruthy();
  });

  it('selects an item and calls onSelectItem callback', () => {
    const { getByTestId } = render(
      <AppPicker
        items={[
          { label: 'Item 1', value: 1 },
          { label: 'Item 2', value: 2 }
        ]}
        onSelectItem={onSelectItemMock}
        placeholder="Select an item"
      />
    );

    fireEvent.press(getByTestId('pickerTestID'));
    fireEvent.press(getByTestId('Item 1'));

    expect(onSelectItemMock).toHaveBeenCalledWith({
      label: 'Item 1',
      value: 1
    });
  });

  it('closes modal after selecting an item', () => {
    const { getByTestId, queryByTestId } = render(
      <AppPicker
        onSelectItem={onSelectItemMock}
        items={[
          { label: 'Item 1', value: 1 },
          { label: 'Item 2', value: 2 }
        ]}
        placeholder="Select an item"
      />
    );

    fireEvent.press(getByTestId('pickerTestID'));
    fireEvent.press(getByTestId('Item 1'));

    expect(queryByTestId('modal')).toBeNull();
  });
});
