import { StatusBar } from 'react-native';
import { Routes } from './src/routes';
import { ContextProvider } from './src/context';


export default function App() {
  return (
    <ContextProvider>
      <StatusBar barStyle="light-content"/>
      <Routes />
    </ContextProvider>
  );
}


