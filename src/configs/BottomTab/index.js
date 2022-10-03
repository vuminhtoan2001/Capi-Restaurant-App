import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Dimensions, StyleSheet } from "react-native";

import config from './config'

import {COLOR} from '~/assets/Colors'

const Tab = createBottomTabNavigator();

const { width, height } = Dimensions.get("window");
function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 80,
        },
        tabBarActiveTintColor: COLOR.PRIMARY_COLOR,
        tabBarInactiveTintColor: COLOR.TEXT_OPACITY_COLOR,
        tabBarShowLabel: true,
        tabBarLabelStyle:{
          fontFamily: "quicksan_700",
          fontSize:10,
        },
        headerShown: false,
      })}
    >
      {config.map(item => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            ...item.options,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  background_icon: {
    padding: 14,
    borderRadius: 10,
    backgroundColor: "#20d9941f",
  },
});

export default BottomTab;
