import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation';
import AuthContextProvider from './src/contexts/AuthContext';
import BasketContextProvider from './src/contexts/BasketContext';

import { Amplify } from 'aws-amplify';
import config from './src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
Amplify.configure({...config, Analytics: {disabled: true}});

function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <BasketContextProvider>
          <RootNavigator />
        </BasketContextProvider>
      </AuthContextProvider>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    /* alignItems: 'center',
    justifyContent: 'center', */
  },
});

export default withAuthenticator(App);