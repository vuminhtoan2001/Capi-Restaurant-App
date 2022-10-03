import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import config from './config';
// import { useLayoutContext } from '~/layouts/ControlProvider';

const Stack = createStackNavigator();

export default function HomeBottomTab() {
//   const { warehouseId } = useLayoutContext();
  // console.log({ warehouseId });
  return (
    <>
      <Stack.Navigator
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
      </Stack.Navigator>
    </>
  );
}
