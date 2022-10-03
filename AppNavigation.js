import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MainNavigation from "~/configs/MainNavigation"
import AuthNavigation from "~/configs/auth"

import { useGetContext } from "~/components/Provider";


const Stack = createStackNavigator();

export default function AppNavigation() {
  const { isLogin } = useGetContext();
  console.log("Navigation=>>",isLogin);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GuideFirst"
      screenOptions={{
        headerShown: false,
      }}>
      {isLogin ? (
            <Stack.Screen name="RootRoute" component={MainNavigation} />
          ) : (
            <Stack.Screen name="AuthRoute" component={AuthNavigation} />
          )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
