/* eslint-disable react-native/no-inline-styles */
import {StyleSheet,Button, Text, View, Image} from 'react-native';
import React from 'react';
import {Addform} from '/Users/user/Desktop/MyTracker/src/components/addExpense.js';
import {ExpenseComponent} from '/Users/user/Desktop/MyTracker/src/components/expenseComponent';
import {SCREEN_WIDTH, vh, vw} from '../../utils/dimension';
import { useState } from 'react';

const Home = () => {
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
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <View style={styles.name}>
          <Text style={styles.headerText}>Welcome Back,</Text>
          <Text style={styles.headerText}>David</Text>
        </View>
        <View>
          <Image
            source={require('../../assets/icon/profileImg.png')}
            style={styles.profileImg}
          />
        </View>
      </View>

      <View style={styles.subContainer}>
        <Text style={styles.accBalText}>Account balance</Text>
        <Text style={styles.totalAmount}>$9400</Text>
        <View style={styles.moneytransfered}>
          <View style={styles.incomeContainer}>
            <Image
              source={require('../../assets/icon/income.png')}
              style={styles.incomeImg}
            />
            <View style={styles.TextContainer}>
              <Text style={styles.incomeText}>Income</Text>
              <Text style={styles.amtText}>$5000</Text>
            </View>
          </View>
          <View>
            <View style={styles.expenseContainer}>
              <Image
                source={require('../../assets/icon/expenses.png')}
                style={styles.incomeImg}
              />
              <View style={styles.TextContainer}>
                <Text style={styles.incomeText}>Expenses</Text>
                <Text style={styles.amtText}>$1200</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    height: vh(120),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: '#7F3DFF',
    paddingBottom: vh(10),
    paddingHorizontal: vw(10),
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
  },
  profileImg: {
    width: vw(40),
    height: vh(50),
  },
  subContainer: {
    marginTop: vh(20),
    alignItems: 'center',
  },
  accBalText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'grey',
  },
  totalAmount: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: vh(10),
  },
  moneytransfered: {
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: vw(20),
  },
  incomeContainer: {
    flexDirection: 'row',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: vw(14),
    borderRadius: 24,
    paddingVertical: vh(20),
  },
  incomeImg: {
    width: vw(48),
    height: vw(48),
  },
  TextContainer: {
    marginLeft: vw(10),
  },
  incomeText: {
    fontSize: 14,
    color: 'white',
  },
  amtText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
  },
  expenseContainer: {
    flexDirection: 'row',
    backgroundColor: 'red',
    paddingHorizontal: vw(14),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: vh(20),
    borderRadius: vw(24),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
},
addButton: {
  padding: vw(10),
  margin: vw(10),
},
});
