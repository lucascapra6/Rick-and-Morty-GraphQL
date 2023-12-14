import styled from 'styled-components/native';
import {Colors} from '../assets/colors/colors';

type ImageStyledProps = {
  width: number;
  height: number;
};

export const ImageStyled = styled.Image<ImageStyledProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;
