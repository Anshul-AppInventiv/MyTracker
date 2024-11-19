import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../screens/auth/Login';
// import home from '../screens/dashboard/home';
import BottomNavigation from './BottomNavigation';
import SplashScreen from '../screens/auth/Splash';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'SplashScreen'}screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="home" component={BottomNavigation} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
