import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalendarContainer from './screens/CalendarContainer';
import HomepageContainer from './screens/HomepageContainer';
import SettingsContainer from './screens/SettingsContrainer';

const Tab = createBottomTabNavigator();
const homeName = "Tasks"
const calendarName= "Calendar"
const settingsName= "Settings"


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName = {homeName}>
        <Tab.Screen name = {calendarName} component={CalendarContainer} />
        <Tab.Screen name = {homeName} component={HomepageContainer} />
        <Tab.Screen name = {settingsName} component={SettingsContainer} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
