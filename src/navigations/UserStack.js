import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Movies from '../screens/Movies';
import Profile from '../screens/Profile';
import Ticket from '../screens/Ticket';
import Home from '../screens/Home';
import TicketData from '../screens/TicketData';
import MovieDetails from '../screens/MovieDetails';
import SeatSelection from '../screens/SeatSelection';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TicketStack = () => {
  return (
    <>
        <Stack.Navigator initialRouteName='Ticket'>
          <Stack.Screen 
            name='Ticket'
            component={Ticket}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='TicketData'
            component={TicketData}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
    </>
  );
};

const MovieStack = () => {
  return (
    <>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen 
            name='Home'
            component={Home}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='MovieDetails'
            component={MovieDetails}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='SeatSelection'
            component={SeatSelection}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
    </>
  );
};

const UserStack = () => {
  return (
    <> 
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="HomeStack"
            component={MovieStack}
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Movies"
            component={Movies}
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="TicketStack"
            component={TicketStack}
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default UserStack;
