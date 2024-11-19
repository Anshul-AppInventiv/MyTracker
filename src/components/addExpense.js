/* eslint-disable radix */
/* eslint-disable react/react-in-jsx-scope */
import {vh, vw} from '../utils/dimension';
import {Picker} from '@react-native-picker/picker';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Addform({
  name,
  setName,
  amount,
  setAmount,
  category,
  setCategory,
  categories,
  setExpenses,
  expenses,
  chartData,
  setChartData,
  setAddForm,
}) {
  return (
    <View >
      <Text style={styles.header}>Expense Details</Text>
      <Text style={styles.label}>Expense Name</Text>
      <TextInput
        onChangeText={value => setName(value)}
        value={name}
        style={styles.textInput}
        placeholder="Enter the expense name"
      />
      <Text style={styles.label}>Expense Amount</Text>
      <TextInput
        keyboardType="numeric"
        onChangeText={value => {
          value = value.replace(/[^0-9]/g, '');
          setAmount(value);
        }}
        value={amount}
        style={styles.textInput}
        placeholder="Amount"
      />

      <Text style={styles.label}>Expense Category</Text>
      <Picker
        style={styles.textInput}
        selectedValue={category}
        onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}>
        {categories.map((category, index) => {
          return <Picker.Item key={index} label={category} value={category} />;
        })}
      </Picker>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.addExpenseButton}
          onPress={() => {
            const amountNumber = parseInt(amount);
            if (amountNumber <= 0 || name === '') {
              Alert.alert('Please enter a valid amount and name');
              return;
            }
            setExpenses([
              ...expenses,
              {
                id: new Date().getTime(),
                category,
                name,
                amount: amountNumber,
              },
            ]);
            let newChartData = [...chartData];
            let index = newChartData.findIndex(item => item.name === category);
            newChartData[index].amount += amountNumber;
            setChartData(newChartData);
            setAddForm(false);
            setName('');
            setAmount('');
            setCategory('Food');
          }}>
          <Text style={styles.cancelText}>Add Expense</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => {
            setAddForm(false);
          }}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical:vh(10),
    paddingHorizontal:vw(20),
  },
  header: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:vh(20),
    marginBottom: vh(30),
  },
  textInput: {
    borderRadius: 12,
    borderColor: '#ccc',
    fontSize: 16,
    borderWidth: 1,
    padding: vw(10),
    margin: vw(10),
  },
  label: {
    color: 'black',
    fontSize: 18,
    fontWeight: '400',
    marginLeft: vw(10),
  },
  addExpenseButton: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: vw(10),
    borderRadius: 10,
  },
  cancelButton:{
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    padding: vw(10),
    borderRadius: 10,
  },
  cancelText:{
    color: 'white',
    fontWeight: 'bold',
},
});
