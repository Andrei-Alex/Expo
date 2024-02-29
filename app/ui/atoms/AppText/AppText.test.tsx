import * as React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';

import AppText from './AppText';

describe('AppText', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AppText>Test</AppText>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('applies style correctly', () => {
    const testStyle = { fontSize: 20, color: 'blue' };
    const tree = renderer
      .create(<AppText style={testStyle}>Styled Test</AppText>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('applies passed TextStyle', () => {
    const testStyle = { color: 'red', fontSize: 20 };

    const instance = renderer.create(
      <AppText style={testStyle}>Test</AppText>
    ).root;
    const textComponent = instance.findByType(Text);

    const receivedStyle = textComponent.props.style;
    const styleArray = Array.isArray(receivedStyle)
      ? receivedStyle
      : [receivedStyle];

    const hasTestStyle = styleArray.some((style) =>
      Object.entries(testStyle).every(([key, value]) => style[key] === value)
    );
    expect(hasTestStyle).toBeTruthy();
  });
});
