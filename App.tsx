import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screens from './screens';


export type StackNavigationParams = {
  home:undefined,
  details:undefined
}


const Stack = createNativeStackNavigator<StackNavigationParams>()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen  component={Screens.Home} name='home'/>
        <Stack.Screen  component={Screens.Details} name='details'/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


