import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { theme } from '../global/styles/theme';
import { Home } from '../screens/Home';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary,
        },
      }}
    >
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
