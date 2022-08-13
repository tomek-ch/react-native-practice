import { SafeAreaView } from "react-native-safe-area-context";
import { useSplashScreen } from "./hooks/useSplashScreen";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { Home } from "./screens/Home";
import { Details } from "./screens/Details";
import { ToDosContextProvider } from "./context/ToDosContext";

type RootStackParamList = {
  Home: undefined;
  Details: { id: number };
};

export type ScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const { appIsReady, onLayoutRootView } = useSplashScreen();

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaView
      onLayout={onLayoutRootView}
      style={{ flex: 1, backgroundColor: "#fff" }}
    >
      <ToDosContextProvider>
        <NavigationContainer
          theme={{
            ...DefaultTheme,
            colors: {
              ...DefaultTheme.colors,
              background: "#fff",
            },
          }}
        >
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
              statusBarStyle: "dark",
              statusBarColor: "#fff",
            }}
          >
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </ToDosContextProvider>
    </SafeAreaView>
  );
}
