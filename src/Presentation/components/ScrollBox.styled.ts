import styled from 'styled-components/native';
import {Colors} from '../assets/colors/colors';

type ScrollBoxStyled = {
  width: number;
  height: number;
};

export const ScrollBoxStyled = styled.ScrollView<ScrollBoxStyled>`
  flex: 1;
  width: ${props => props.width}px;
  max-width: 90%;
  max-height: 90%;
  height: ${props => props.height}px;
  background-color: ${Colors.primary};
  border-radius: 10px;
  padding: 20px;
`;
