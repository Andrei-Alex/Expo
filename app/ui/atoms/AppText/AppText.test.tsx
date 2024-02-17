import React from 'react';
import renderer from 'react-test-renderer';
import AppText from './AppText';

describe('AppText', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AppText>Test</AppText>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
