/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
import React from 'react';
import Inicio from './views/Inicio';
import Nosotros from './views/Nosotros';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const App = () => {
  
  const Stack = createStackNavigator();

  return (
    <>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          //title: "HOME",
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#F4511E'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      >
          <Stack.Screen 
            name="Inicio"
            component={Inicio}
          />
          <Stack.Screen 
            name="Nosotros"
            component={Nosotros}
            options={ ({route}) => ({
                title: 'Nosotros '+route.params.clienteId
            })}
          />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
