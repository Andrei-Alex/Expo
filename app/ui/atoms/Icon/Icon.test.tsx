import React from 'react';
import renderer from 'react-test-renderer';

import { colors } from '../../../config';
import Icon from './Icon';
import { findByTestId } from '../../../helpers/jest';

describe('Icon', () => {
  const defaultIconProps = {
    name: 'email',
    size: 50,
    backgroundColor: '#f0f',
    iconColor: '#fff',
    testID: 'email-icon'
  };
  it('renders correctly with default props', () => {
    const tree = renderer.create(<Icon {...defaultIconProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with custom size, backgroundColor, and iconColor', () => {
    const tree = renderer.create(<Icon {...defaultIconProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders multiple icons with distinct testIDs', () => {
    const component = renderer.create(
      <>
        <Icon {...defaultIconProps} />
        <Icon
          name="home"
          size={40}
          backgroundColor={colors.white}
          iconColor={colors.black}
          testID={'home-icon'}
        />
      </>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly and can be found by testID', () => {
    const component = renderer.create(<Icon {...defaultIconProps} />);

    const tree = component.toJSON();
    const iconContainer = findByTestId(tree, 'container-email-icon');

    expect(iconContainer).not.toBeNull();
    expect(iconContainer.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          backgroundColor: '#f0f'
        })
      ])
    );
  });
});
