import {render} from '@testing-library/react-native';
import {CentralizedContainer} from '../../Presentation/components/CentralizedContainer.styled';
import {Colors} from '../../Presentation/assets/colors/colors';

describe('CentralizedContainer component', () => {
  it('renders with correct styles', () => {
    const {getByTestId} = render(
      <CentralizedContainer testID="test-container" />,
    );

    const containerElement = getByTestId('test-container');
    expect(containerElement.props.style.backgroundColor).toBe(
      Colors.background,
    );
    expect(containerElement.props.style).not.toHaveProperty('flex');
  });
});
