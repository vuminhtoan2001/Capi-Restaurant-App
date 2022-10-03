import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import config from './config';
import { StatusBar } from 'react-native';

const AuthStack = createStackNavigator();
function AuthNavigation() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <AuthStack.Navigator
      initialRouteName="GuideFirst"
        screenOptions={{
          cardStyle: { backgroundColor: '#fff' },
          headerShown: false,
        }}>
        {config.map(item => (
          <AuthStack.Screen
            key={item.name}
            name={item.name}
            component={item.component}
            options={{
              ...item.options,
            }}
          />
        ))}
      </AuthStack.Navigator>
    </>
  );
}

export default React.memo(AuthNavigation);
