import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import TaskModalContextProvider from './contexts/TaskModalContext';
import TodosContextProvider from './contexts/TodosContext';
import SelectedDateContextProvider from './contexts/SelectedDateContext';
import { useContext } from 'react';
import Navigation from './navigation/Navigation';

export default function App() {

  return (
    <SelectedDateContextProvider>
    <TodosContextProvider>
    <TaskModalContextProvider>
      <Navigation/>
    </TaskModalContextProvider>
    </TodosContextProvider>
    </SelectedDateContextProvider>
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
