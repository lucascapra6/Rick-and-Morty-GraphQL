import styled from 'styled-components/native';
import {CentralizedContainer} from './CentralizedContainer.styled';
import {ActivityIndicatorProps} from 'react-native';
import {Colors} from '../assets/colors/colors';

const ActivityIndicatorStyled = styled.ActivityIndicator``;

type LoadingProps = ActivityIndicatorProps & {
  color?: Colors;
};
export function LoadingStyled({
  size = 'small',
  color = Colors.primary,
}: LoadingProps) {
  return (
    <CentralizedContainer>
      <ActivityIndicatorStyled size={size} color={color} />
    </CentralizedContainer>
  );
}
