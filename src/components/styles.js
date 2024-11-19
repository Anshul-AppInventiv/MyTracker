import { vh,vw } from '../utils/dimension';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    marginTop: 50,
  },
  addButton: {
    padding: vw(10),
    margin: vw(10),
  },
  expenseTile: {
    // column with 3 cells
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
  formAdd: {
    // display: "none",
  },
  
});
export default styles;
