import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { Home } from "@screens/Home";
import { SignUpScreen } from "@screens/SignUpMeal";
import { StatiticsScreen } from "@screens/Statitics";

type AppRoutes = {
  home: undefined;
  signUp: undefined;
  statitics: undefined;
};

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="statitics" component={StatiticsScreen} />
      <Screen name="signUp" component={SignUpScreen} />
    </Navigator>
  );
}
