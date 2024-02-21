import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import renderer from 'react-test-renderer';
import ListDeleteItemAction from './ListDeleteItemAction';
import { colors } from '../../../config';

describe('ListDeleteItemAction', () => {
  let component;
  const onPressMock = jest.fn();
  const styles = { backgroundColor: colors.danger };

  beforeEach(() => {
    onPressMock.mockReset();
    component = renderer.create(
      <ListDeleteItemAction style={styles} onPress={onPressMock} />
    );
  });

  it('renders correctly', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('receives custom styles correctly', () => {
    const instance = component.root;
    const viewComponent = instance.findByType(View);

    const receivedStyle = viewComponent.props.style;
    const styleArray = Array.isArray(receivedStyle)
      ? receivedStyle
      : [receivedStyle];

    const hasTestStyle = styleArray.some((style) =>
      Object.entries(styles).every(([key, value]) => style[key] === value)
    );
    expect(hasTestStyle).toBeTruthy();
  });

  it('triggers onPress when pressed', () => {
    const touchable = component.root.findByType(TouchableWithoutFeedback);
    touchable.props.onPress();

    expect(onPressMock).toHaveBeenCalled();
  });
});
