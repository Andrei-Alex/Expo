import * as React from 'react';
import { View } from 'react-native';
import * as renderer from 'react-test-renderer';

import { colors } from '../../../config';
import ListItemSeparator from './ListItemSeparator';

describe('AppText', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ListItemSeparator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('applies passed ViewStyle', () => {
    const styles = { backgroundColor: colors.danger };

    const instance = renderer.create(<ListItemSeparator style={styles} />).root;
    const viewComponent = instance.findByType(View);

    const receivedStyle = viewComponent.props.style;
    const styleArray = Array.isArray(receivedStyle)
      ? receivedStyle
      : [receivedStyle];

    const hasTestStyle = styleArray.some((style) =>
      Object.entries(style).every(([key, value]) => style[key] === value)
    );
    expect(hasTestStyle).toBeTruthy();
  });
});
