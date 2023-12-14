import {
  NavigationProp,
  ParamListBase,
  useNavigation as useNav,
} from '@react-navigation/native';

type NavigationParamListBase = NavigationProp<ParamListBase>;
export function useNavigation(): NavigationParamListBase {
  return useNav<NavigationParamListBase>();
}
