import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalendarContainer from '../screens/CalendarContainer';
import HomepageContainer from '../screens/HomepageContainer';
import SettingsContainer from '../screens/SettingsContainer';
import { useContext } from 'react';
import { TaskModalContext } from '../contexts/TaskModalContext';
import { Button } from 'react-native';
import TimetableContainer from '../screens/TimetableContainer';

const Tab = createBottomTabNavigator();
const homeName = "Tasks"
const calendarName= "Calendar"
const settingsName= "Settings"
const timetableName = "Timetable"


const Navigation = () => {

    const {addTaskModalOpen, setAddTaskModalOpen} = useContext(TaskModalContext)

    return(
        <NavigationContainer>
            <Tab.Navigator initialRouteName = {timetableName}>
                <Tab.Screen name = {calendarName} component={CalendarContainer} 
                options={{
                    headerRight: () => (
                    <Button onPress={() => setAddTaskModalOpen(true)}
                    title='Add Task'
                    />
                    ),
                }}/>
                {/* <Tab.Screen 
                name = {homeName} 
                component={HomepageContainer} 
                options={{
                    headerRight: () => (
                    <Button onPress={() => setAddTaskModalOpen(true)}
                    title='Add Task'
                    />
                    ),
                }}/> */}
                <Tab.Screen 
                name = {timetableName} 
                component={TimetableContainer} 
                />
                <Tab.Screen name = {settingsName} component={SettingsContainer} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigation