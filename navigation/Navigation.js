import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalendarContainer from '../screens/CalendarContainer';
import HomepageContainer from '../screens/HomepageContainer';
import SettingsContainer from '../screens/SettingsContainer';
import { useContext } from 'react';
import { TaskModalContext } from '../contexts/TaskModalContext';
import { Button } from 'react-native';

const Tab = createBottomTabNavigator();
const homeName = "Tasks"
const calendarName= "Calendar"
const settingsName= "Settings"

const Navigation = () => {

    const {addTaskModalOpen, setAddTaskModalOpen} = useContext(TaskModalContext)

    return(
        <NavigationContainer>
            <Tab.Navigator initialRouteName = {homeName}>
                <Tab.Screen name = {calendarName} component={CalendarContainer} />
                <Tab.Screen 
                name = {homeName} 
                component={HomepageContainer} 
                options={{
                    headerRight: () => (
                    <Button onPress={() => setAddTaskModalOpen(true)}
                    title='Add Task'
                    />
                    ),
                }}/>
                <Tab.Screen name = {settingsName} component={SettingsContainer} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigation