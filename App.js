// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from './src/LoadingScreen';
import ThoughtScreen from './src/ThoughtScreen';
import LoginScreen from './src/LoginScreen';
import RegisterScreen from './src/RegisterScreen';
import HomeScreen from './src/HomeScreen';
import ReminderPage from './src/ReminderPage';
import HomeServ from './src/HomeServ'; // Update the path accordingly
import Aboutus from './src/Aboutus';
import Agric from './src/Agric';
import Others from './src/Others';
import Professional from './src/Professional';
import Contact from './src/Contact';
import NewPage from './src/NewPage'; // Update the path accordingly
import { AppProvider } from './src/AppContext'; // Import the context

const Stack = createStackNavigator();

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Loading">
          <Stack.Screen
            name="Loading"
            component={LoadingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Thought"
            component={ThoughtScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: 'Login' }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ title: 'Register' }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Reminders"
            component={ReminderPage}
            options={{ title: 'Reminders' }}
          />
          <Stack.Screen
            name="HomeServ"
            component={HomeServ}
            options={{ title: 'Home Services' }}
          />
          <Stack.Screen
            name="Aboutus"
            component={Aboutus}
            options={{ title: 'Aboutus' }}
          />
          <Stack.Screen
            name="Agric"
            component={Agric}
            options={{ title: 'Agric' }}
          />
          <Stack.Screen
            name="Others"
            component={Others}
            options={{ title: 'Others' }}
          />
          <Stack.Screen
            name="Professional"
            component={Professional}
            options={{ title: 'Professional' }}
          />
          <Stack.Screen
            name="Contact"
            component={Contact}
            options={{ title: 'Contact' }}
          />
          <Stack.Screen
            name="NewPage"
            component={NewPage}
            options={{ title: 'New Page' }}
          />
          {/* Add other screens here */}
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
