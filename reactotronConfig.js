import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
const tron = Reactotron.configure()
  .useReactNative()
  .use(reactotronRedux())
  .connect();

tron.clear();
console.tron = Reactotron;

export default tron;
