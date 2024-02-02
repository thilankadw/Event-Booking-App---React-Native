import React from 'react'

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Main from '../screens/Main';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen
                name="Main"
                component={Main}
                options={{
                    headerShown: false
                }}
                />
                <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{
                    headerShown: false
                }}
                />
                <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{
                    headerShown: false
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    </>
  )
}

export default AuthStack;
