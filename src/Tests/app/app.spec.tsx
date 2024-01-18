import {render} from '../test-utils';
import App from '../../../App';
import {act, waitFor} from '@testing-library/react-native';

describe('App', () => {
  it('should render the App ', async function () {
    render(<App />);
  });
});
