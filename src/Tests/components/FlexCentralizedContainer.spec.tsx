import {render} from '@testing-library/react-native';
import {CentralizedContainer} from '../../Presentation/components/CentralizedContainer.styled';
import {Colors} from '../../Presentation/assets/colors/colors';
import {FlexCentralizedContainer} from '../../Presentation/components/FlexCentralizedContainer.styled';

describe('FlexCentralizedContainer component', () => {
  it('renders with correct styles', () => {
    const {getByTestId} = render(
      <FlexCentralizedContainer testID="centralized-test-container" />,
    );

    const containerElement = getByTestId('centralized-test-container');
    expect(containerElement.props.style.backgroundColor).toBe(
      Colors.background,
    );
    console.log(containerElement.props.style);
    expect(containerElement.props.style.flexGrow).toBe(1);
    expect(containerElement.props.style.flexShrink).toBe(1);
  });
});
