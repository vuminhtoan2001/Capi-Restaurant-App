import { useFonts } from "expo-font";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppNavigation from "./AppNavigation";
import Provider from "~/components/Provider";

const queryClient = new QueryClient();

export default function App() {
  const [fontsLoaded] = useFonts({
    quicksan_300: require("./assets/fonts/Quicksand-Light.ttf"),
    quicksan_400: require("./assets/fonts/Quicksand-Regular.ttf"),
    quicksan_500: require("./assets/fonts/Quicksand-Medium.ttf"),
    quicksan_600: require("./assets/fonts/Quicksand-SemiBold.ttf"),
    quicksan_700: require("./assets/fonts/Quicksand-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <QueryClientProvider client={queryClient}>
        <Provider>
          <AppNavigation />
        </Provider>
      </QueryClientProvider>
    );
  }
}
