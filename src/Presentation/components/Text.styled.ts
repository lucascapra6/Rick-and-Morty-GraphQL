import styled from 'styled-components/native';
import {Sizes} from '../assets/sizes/sizes';
import {Weights} from '../assets/weights/weights';
import {Colors} from '../assets/colors/colors';

type TextProps = {
  color?: Colors;
  size?: Sizes;
  weight?: Weights;
};
export const TextStyled = styled.Text<TextProps>`
  color: ${props => props.color || Colors.text};
  font-size: ${props => props.size || Sizes.small};
  font-weight: ${props => props.weight || Weights.bold};
`;
