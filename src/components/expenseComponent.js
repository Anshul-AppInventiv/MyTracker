/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */

import { Alert, TouchableOpacity, ScrollView, StyleSheet, Text, View } from 'react-native';
import { vh,vw } from '../utils/dimension';

export default function ExpenseComponent({
    expenses,
    setExpenses,
    chartData,
    setChartData,
}) {
    return (
        <ScrollView
            style={{
                marginBottom: 80,
            }}
        >
            {expenses.map((expense) => {
                console.log(expense);
                return (
                    <ExpenseListTile
                        key={expense.id}
                        expense={expense}
                        chartData={chartData}
                        expenses={expenses}
                        setChartData={setChartData}
                        setExpenses={setExpenses}
                    />
                );
            })}
        </ScrollView>
    );
}
const ExpenseListTile = ({
    expense,
    expenses,
    setExpenses,
    chartData,
    setChartData,
}) => {
    return (
        <View style={styles.expenseTile}>
            <Text style={styles.expenseTileText}>{expense.name}</Text>
            <Text style={styles.expenseTileText}>{expense.category}</Text>
            <Text style={styles.expenseTileText}>{expense.amount}</Text>
            <TouchableOpacity
                onPress={() => {
                    Alert.alert('Delete', 'Are you sure you want to delete?', [
                        {
                            text: 'Yes',
                            onPress: () => {
                                let newExpenses = [...expenses];
                                let index = newExpenses.findIndex(
                                    (item) => item.id === expense.id
                                );
                                newExpenses.splice(index, 1);
                                setExpenses(newExpenses);
                                let newChartData = [...chartData];
                                let index2 = newChartData.findIndex(
                                    (item) => item.name === expense.category
                                );
                                newChartData[index2].amount -= expense.amount;
                                setChartData(newChartData);
                            },
                        },
                        {
                            text: 'No',
                            onPress: () => {
                                console.log('No');
                            },
                        },
                    ]);
                }}
            style={styles.deleteButton}
            >
                <Text style={styles.deleteText}>Delete</Text>
                </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    expenseTile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'lightgrey',
        width: '95%',
        padding: vw(10),
        margin: vw(10),
        borderRadius:vw(10),
      },
      expenseTileText: {
        fontSize: 20,
        width: '22%',
        textAlign: 'center',
      },
      deleteButton:{
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center',
        padding:vw(4),
        borderRadius:vw(6),
      },
      deleteText:{
        color:'white',
        fontWeight:'bold',
      },
});
