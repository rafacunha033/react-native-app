import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

import HomeScreen from './src/pages/home';
import LoginScreen from './src/pages/login';
import SchedulesScreen from './src/pages/schedules';


const Stack  = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'BusApp'}}  
        />
        
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Schedules" component={SchedulesScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  );

}

// const HomeScreen = ({ navigation }) => {
//   return (
//     <Button
//       title="Go to Jane's profile"
//       onPress={() =>
//         navigation.navigate('Profile', { name: 'Jane' })
//       }
//     />
//   );
// };

// const ProfileScreen = ({ navigation, route }) => {
//   return <Text>This is {route.params.name}'s profile</Text>;
// };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
