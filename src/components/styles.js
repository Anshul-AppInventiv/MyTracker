import { vw } from '../utils/dimension';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  expenseTile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'lightgrey',
    width: '95%',
    padding: 10,
    margin: 10,
  },
  expenseTileText: {
    fontSize: 20,
    width: '22%',
    textAlign: 'center',
  },
});
export default styles;
