import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import BottomTab from './BottomTab';
import config from './config';
// import { useLayoutContext } from '~/layouts/ControlProvider';

const Stack = createStackNavigator();

export default function MainRoute() {
//   const { warehouseId } = useLayoutContext();
  // console.log({ warehouseId });
  return (
    <>
      <Stack.Navigator
        initialRouteName={'Main'}
        screenOptions={{
          headerShown: false,
        }}>
        {config.map(item => (
          <Stack.Screen
            key={item.name}
            name={item.name}
            component={item.component}
            options={item.options}
          />
        ))}
        <Stack.Screen name="Main" component={BottomTab} />
      </Stack.Navigator>
    </>
  );
}
