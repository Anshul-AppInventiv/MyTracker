/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import Addform from '/Users/user/Desktop/MyTracker/src/components/addExpense';
import ExpenseComponent from '/Users/user/Desktop/MyTracker/src/components/expenseComponent.js';
import {SCREEN_HEIGHT, SCREEN_WIDTH, vh, vw} from '../../utils/dimension';

export default function App() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [expenses, setExpenses] = useState([]);
  const categories = ['Food', 'Clothes', 'Bills', 'Others'];
  const [addForm, setAddForm] = useState(false);

  const addExpense = () => {
    setAddForm(true);
  };
  const [chartData, setChartData] = useState([
    {
      name: 'Food',
      amount: 0,
      color: '#e62d20',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Clothes',
      amount: 0,
      color: '#27e620',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Bills',
      amount: 0,
      color: '#1c6bd9',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Others',
      amount: 0,
      color: '#5adbac',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      {addForm === true ? (
        <Addform
          name={name}
          setName={setName}
          amount={amount}
          setAmount={setAmount}
          category={category}
          setCategory={setCategory}
          categories={categories}
          setExpenses={setExpenses}
          expenses={expenses}
          chartData={chartData}
          setChartData={setChartData}
          setAddForm={setAddForm}
        />
      ) : (
        <View style={styles.row}>
          <TouchableOpacity
            onPress={addExpense}
            color="green"
            style={styles.addButton}>
            <Text style={styles.addExpenseText}>Add Expense</Text>
          </TouchableOpacity>
        </View>
      )}

      <ExpenseComponent
        expenses={expenses}
        setExpenses={setExpenses}
        chartData={chartData}
        setChartData={setChartData}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container:{
    backgroundColor: '#fff',
    height: SCREEN_HEIGHT,
    marginTop: vh(50),
    },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: vh(10),
    paddingHorizontal: vw(20),
    backgroundColor: 'green',
  },
  addButton: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  addExpenseText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
