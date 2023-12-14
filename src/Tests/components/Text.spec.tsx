import React from 'react';
import {render} from '@testing-library/react-native';
import {TextStyled} from '../../Presentation/components/Text.styled';
import {Colors} from '../../Presentation/assets/colors/colors';
import {Sizes} from '../../Presentation/assets/sizes/sizes';
import {Weights} from '../../Presentation/assets/weights/weights';

describe('TextStyled component', () => {
  it('renders with default styles', () => {
    const {getByTestId} = render(<TextStyled testID="test-text" />);

    const textElement = getByTestId('test-text');
    expect(textElement.props.style.color).toBe(Colors.text);
    console.log(textElement.props.style.fontSize);
    expect(textElement.props.style.fontSize).toBe(Sizes.small);
    expect(textElement.props.style.fontWeight).toBe(Weights.bold);
  });

  it('renders with specified color, size, and weight', () => {
    const customColor = Colors.secondary;
    const customSize = Sizes.large;
    const customWeight = Weights.normal;

    const {getByTestId} = render(
      <TextStyled
        color={customColor}
        size={customSize}
        weight={customWeight}
        testID="test-text"
      />,
    );

    const textElement = getByTestId('test-text');
    expect(textElement.props.style.color).toBe(customColor);
    expect(textElement.props.style.fontSize).toBe(customSize);
    expect(textElement.props.style.fontWeight).toBe(customWeight);
  });
});
