import React from 'react';
import {render} from '@testing-library/react-native';
import {BoxStyled} from '../../Presentation/components/Box.styled';
import {Colors} from '../../Presentation/assets/colors/colors';
describe('BoxStyled component', () => {
  it('renders correctly with given width and height', () => {
    const {getByTestId} = render(
      <BoxStyled width={200} height={150} testID="test-box" />,
    );

    const boxElement = getByTestId('test-box');
    expect(boxElement.props.style.width).toBe(200);
    expect(boxElement.props.style.height).toBe(150);
  });

  it('renders with maxWidth and maxHeight as 90%', () => {
    const {getByTestId} = render(
      <BoxStyled width={2000} height={2000} testID="test-box" />,
    );

    const boxElement = getByTestId('test-box');
    expect(boxElement.props.style.maxWidth).toBe('90%');
    expect(boxElement.props.style.maxHeight).toBe('90%');
  });

  it('renders with the correct background color and styling', () => {
    const {getByTestId} = render(
      <BoxStyled width={100} height={100} testID="test-box" />,
    );
    const boxElement = getByTestId('test-box');
    expect(boxElement.props.style.backgroundColor).toBe(Colors.primary);
    expect(boxElement.props.style.borderTopLeftRadius).toBe(10);
    expect(boxElement.props.style.paddingTop).toBe(20);
    expect(boxElement.props.style.paddingLeft).toBe(20);
  });
});
