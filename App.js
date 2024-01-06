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
import HomeServ from './src/HomeServ';
import Aboutus from './src/Aboutus';
import Agric from './src/Agric';
import Others from './src/Others';
import Professional from './src/Professional';
import Contact from './src/Contact';
import NewPage from './src/NewPage';
import Shopping from './src/Shopping'
import ValamPage from './src/agricultural/ValamPage';
import VehicleScreen from './src/Vehicle'; // Add this import statement
import Lawyer from './src/Lawyer';
import HealthCare from './src/HealthCare';
import Finance from './src/Finance';
import Insurance from './src/Insurance';
import Engineering from './src/Engineering';
import PoliceServices from './src/Police Services';
import ITProfessionals from './src/ITProfessionals';
import PhotoVideoGraphers from './src/PhotoVideoGraphers';
import SocialWorkers from './src/SocialWorkers';
import FireDepartment from './src/FireDepartment';
import John from './src/John';
import James from './src/James';
import Wick from './src/Wick';
import Alfred from './src/Alfred';
import ReligiousPlace from './src/ReligiousPlace';
import Hospital from './src/Hospital'
import MedicalStore from './src/MedicalStore'
import { AppProvider } from './src/AppContext';

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
            options={{ title: 'Sell Products' }}
          />
          <Stack.Screen
            name="ValamPage"
            component={ValamPage}
            options={{ title: 'valam' }}
          />
          <Stack.Screen
            name="Vehicle"
            component={VehicleScreen}
            options={{ title: 'Vehicle' }}
          />
          <Stack.Screen
            name="Shopping"
            component={Shopping}
            options={{ title: 'Shopping' }}
          />
          <Stack.Screen
            name="Lawyer"
            component={Lawyer}
            options={{ title: 'Lawyer' }}
          />
          <Stack.Screen
            name="Healthcare"
            component={HealthCare}
            options={{ title: 'Healthcare' }}
          />
          <Stack.Screen
            name="Finance"
            component={Finance}
            options={{ title: 'Finance' }}
          />
          <Stack.Screen
            name="Engineering"
            component={Engineering}
            options={{ title: 'Engineering' }}
          />
          <Stack.Screen
            name="PoliceServices"
            component={PoliceServices}
            options={{ title: 'PoliceServices' }}
          />
          <Stack.Screen
            name="Insurance"
            component={Insurance}
            options={{ title: 'Insurance' }}
          />
          <Stack.Screen
            name="ITProfessionals"
            component={ITProfessionals}
            options={{ title: 'ITProfessionals' }}
          />
          <Stack.Screen
            name="PhotoVideoGraphers"
            component={PhotoVideoGraphers}
            options={{ title: 'PhotoVideoGraphers' }}
          />
          <Stack.Screen
            name="FireDepartment"
            component={FireDepartment}
            options={{ title: 'FireDepartment' }}
          />
          <Stack.Screen
            name="SocialWorkers"
            component={SocialWorkers}
            options={{ title: 'SocialWorkers' }}
          />
          <Stack.Screen
            name="John"
            component={John}
            options={{ title: 'John' }}
          />
          <Stack.Screen
            name="James"
            component={James}
            options={{ title: 'James' }}
          />
          <Stack.Screen
            name="Wick"
            component={Wick}
            options={{ title: 'Wick' }}
          />
          <Stack.Screen
            name="Alfred"
            component={Alfred}
            options={{ title: 'Alfred' }}
          />
          <Stack.Screen
            name="ReligiousPlace"
            component={ReligiousPlace}
            options={{ title: 'ReligiousPlace' }}
          />
          <Stack.Screen
            name="MedicalStore"
            component={MedicalStore}
            options={{ title: 'MedicalStore' }}
          />
          <Stack.Screen
            name="Hospital"
            component={Hospital}
            options={{ title: 'Hospital' }}
          />
          {/* Add other screens here */}
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
