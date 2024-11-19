/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { Button, SafeAreaView, View } from 'react-native';
import styles from '/Users/user/Desktop/MyTracker/src/components/styles.js';
import Addform from '/Users/user/Desktop/MyTracker/src/components/addExpense';
import ExpenseComponent from '/Users/user/Desktop/MyTracker/src/components/expenseComponent.js';

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
                    <Button
                        onPress={addExpense}
                        color="green"
                        style={styles.addButton}
                        title="Add Expense"
                    />
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