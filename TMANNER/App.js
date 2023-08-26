import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';


// Import the screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import SoldOutScreen from './screens/SoldOutScreen';
import MenuEditScreen from './screens/MenuEditScreen';
import TestScreen from './screens/TestScreen';
import BackupScreen from './screens/BackupScreen';

const Stack = createNativeStackNavigator();
LogBox.ignoreLogs(['Sending `onAnimatedValueUpdate` with no listeners registered.']);


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }}/> */}
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainScreen}/>
        <Stack.Screen name="SoldOut" component={SoldOutScreen}/>
        <Stack.Screen name="MenuEdit" component={MenuEditScreen}/>
        <Stack.Screen name="Test" component={TestScreen}/>
        <Stack.Screen name="Backup" component={BackupScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
