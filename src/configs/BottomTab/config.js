import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import Home from "~/Screens/Home";
import Discovery from "~/Screens/Discovery";
import Bookmark from "~/Screens/Bookmark";
import TopFoodie from "~/Screens/TopFoodie";
import User from "~/Screens/User";

import { COLOR } from '~/assets/Colors';

export default [
  {
    name: 'Home',
    component: Home,
    options: {
      tabBarIcon: ({ color, size = 34 }) => {
        return (
            <Entypo name="home" size={34} color={color} />
        );
      },
    },
  },
  {
    name: 'Discovery',
    component: Discovery,
    options: {
      tabBarIcon: ({ color, size = 34 }) => {
        return (
            <Feather name="map-pin" size={size} color={color} />
        );
      },
    },
  },
  {
    name: 'Bookmark',
    component: Bookmark,
    options: {
      tabBarIcon: ({ color, size = 34 }) => {
        return (
            <Feather name="bookmark" size={size} color={color} />
        );
      },
    },
  },
  {
    name: 'TopFoodie',
    component: TopFoodie,
    options: {
      tabBarIcon: ({ color, size = 34 }) => {
        return (
            <Ionicons name="ios-trophy-outline" size={size} color={color} />
        );
      },
    },
  },
  {
    name: 'User',
    component: User,
    options: {
      tabBarIcon: ({ color, size = 34 }) => {
        return (
            <FontAwesome5 name="user" size={size} color={color} />
        );
      },
    },
  },
  
];
