import * as React from 'react';
import {StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import travelColors from './assets/colors/travel';

import Home from './components/Home';
import ItemDetail from './components/ItemDetail';
import Travel from './components/travel';
import TravelDetail from './components/travel/Detail';
import Account from './components/account';
import Profile from './components/account/Profile';
import Setting from './components/account/Setting';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ItemDetail"
        component={ItemDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function TravelStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Travel"
        component={Travel}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TravelDetail"
        component={TravelDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function AccountStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Setting} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName;

            if (route.name === 'HomeStackScreen') {
              iconName = 'home';
            } else if (route.name === 'TravelStackScreen') {
              iconName = 'wallet-travel';
            } else if (route.name === 'AccountStackScreen') {
              iconName = 'account';
            }

            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: travelColors.orange,
          tabBarInactiveTintColor: travelColors.gray,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
        })}>
        <Tab.Screen
          name="HomeStackScreen"
          component={HomeStackScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="TravelStackScreen"
          component={TravelStackScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="AccountStackScreen"
          component={AccountStackScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: travelColors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

    shadowColor: travelColors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
});

export default App;
