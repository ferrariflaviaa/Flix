
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components/Header';
import { StatusBar } from 'react-native';
import { Routes } from './src/routes';


export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content"
         />
      <Routes />
    </>
  );
}


