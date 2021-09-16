import React from 'react';

import { Feather, Ionicons } from '@expo/vector-icons/';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Details from './src/screens/Details';
import Home from './src/screens/Home';

const Tab = createDrawerNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Início" component={Home} />
      <Tab.Screen name="Detalhes" component={Details} />
    </Tab.Navigator>
  );
}
