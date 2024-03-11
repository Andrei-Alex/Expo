import React from 'react';
import { render, cleanup } from '@testing-library/react-native';
import AppActivityIndicator from './AppActivityIndicator';

jest.mock('lottie-react-native', () => 'LottieView');

describe('AppActivityIndicator', () => {
  afterEach(cleanup);

  it('should render correctly when visible is true', () => {
    const { getByTestId } = render(
      <AppActivityIndicator visible={true} testID={'lottie-activity'} />
    );
    const lottieView = getByTestId('lottie-activity');
    expect(lottieView).toBeTruthy();
  });

  it('should not render when visible is false', () => {
    const { queryByTestId } = render(
      <AppActivityIndicator visible={false} testID={'lottie-activity'} />
    );
    const lottieView = queryByTestId('lottie-activity');
    expect(lottieView).toBeNull();
  });
});
