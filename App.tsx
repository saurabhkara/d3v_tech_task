import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Screens from "./screens";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export type StackNavigationParams = {
  home: undefined;
  details: undefined;
};

const Stack = createNativeStackNavigator<StackNavigationParams>();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home" screenOptions={{headerShown:false}}>
          <Stack.Screen component={Screens.Home} name="home" />
          <Stack.Screen component={Screens.Details} name="details" />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
