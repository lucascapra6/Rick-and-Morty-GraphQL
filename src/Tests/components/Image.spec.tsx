import React from 'react';
import {render} from '@testing-library/react-native';
import {ImageStyled} from '../../Presentation/components/Image.styled';

describe('ImageStyled component', () => {
  it('renders correctly with given width and height', () => {
    const {getByTestId} = render(
      <ImageStyled
        width={200}
        height={150}
        testID="test-image"
        source={{uri: 'url'}}
      />,
    );

    const imageElement = getByTestId('test-image');
    expect(imageElement.props.style.width).toBe(200);
    expect(imageElement.props.style.height).toBe(150);
  });

  it('renders with maxWidth and maxHeight as 95% and 90% respectively', () => {
    const {getByTestId} = render(
      <ImageStyled
        width={2000}
        height={2000}
        testID="test-image"
        source={{uri: 'url'}}
      />,
    );

    const imageElement = getByTestId('test-image');
    expect(imageElement.props.style.maxWidth).toBe('95%');
    expect(imageElement.props.style.maxHeight).toBe('90%');
  });
});
