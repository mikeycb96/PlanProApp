import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import TaskModalContextProvider from './contexts/TaskModalContext';
import { useContext } from 'react';
import Navigation from './navigation/Navigation';

export default function App() {

  return (
    <TaskModalContextProvider>
      <Navigation/>
    </TaskModalContextProvider>
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
