import {
  View,
  ScrollView,
  Text,
  StyleSheet
} from 'react-native';

import { Btn } from './btn';
import { Lister } from './lister';

var Scroller = ScrollView;
var sts = StyleSheet;

export { sts };

// all elements must be one-word, like html elements
export default {
  View,
  Text,
  Btn,
  Lister,
  Scroller
};
