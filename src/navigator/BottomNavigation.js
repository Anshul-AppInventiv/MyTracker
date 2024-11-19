import {Image,StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/dashboard/home';
import Search from '../screens/dashboard/search';
import AddPost from '../screens/dashboard/AddPost';
import Reel from '../screens/dashboard/Reel';
import UserProfile from '../screens/dashboard/UserProfile';
import { vw } from '../utils/dimension';

const Tab = createBottomTabNavigator();
const HomeTabIcon = ({ focused }) => (
  <Image
    style={styles.icon}
    source={
      focused
        ? require('../assets/footer/shome.png')
        : require('../assets/footer/home.png')
    }
  />
);
const SearchTabIcon = ({ focused }) => (
  <Image
    style={styles.icon}
    source={
      focused
        ? require('../assets/footer/sTransaction.png')
        : require('../assets/footer/transaction.png')
    }
  />
);

const AddPostTabIcon = () => (
  <Image
    style={styles.icon}
    source={
      require('../assets/footer/addPost.png')}
  />
);

const ReelsTabIcon = ({focused}) => (
  <Image
    style={styles.icon}
    source={
      focused
        ? require('../assets/footer/sbudget.png')
        : require('../assets/footer/budget.png')
    }
  />
);

const UserProfileTabIcon = () => (
     <Image
    style={styles.icon}
    source={require('../assets/footer/profile.png')}
  />
 
);

const BottomNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: HomeTabIcon,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: SearchTabIcon,
        }}
      />
      <Tab.Screen
        name="AddPost"
        component={AddPost}
        options={{
          tabBarIcon: AddPostTabIcon,
        }}
      />
      <Tab.Screen
        name="Reels"
        component={Reel}
        options={{
          tabBarIcon: ReelsTabIcon,
        }}
      />
      <Tab.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          tabBarIcon: UserProfileTabIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  icon:{
    width: vw(32),
    height: vw(32),
    resizeMode:'contain',
  },
});

